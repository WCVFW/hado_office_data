import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export type OnboardingData = {
  companyName?: string;
  businessAge?: "not_started" | "lt1" | "1to2" | "gt2";
  companySize?: "1-10" | "11-50" | "51-200" | "200+";
};

export default function OnboardingForm({
  onCompleteNavigateTo,
}: { onCompleteNavigateTo?: string } = {}) {
  const navigate = useNavigate();

  // derive a service key from onCompleteNavigateTo (e.g. /plans/plc -> plc)
  const serviceKey = (() => {
    try {
      if (!onCompleteNavigateTo) return "plc";
      const m = onCompleteNavigateTo.match(/\/plans\/([^/?#]+)/);
      if (m && m[1]) return m[1];
    } catch {}
    return "plc";
  })();

  function saveSession(data: OnboardingData) {
    try {
      const key = `onboarding.${serviceKey}`;
      const prev = sessionStorage.getItem(key);
      const merged = {
        ...(prev ? JSON.parse(prev) : {}),
        ...data,
      } as OnboardingData;
      sessionStorage.setItem(key, JSON.stringify(merged));
    } catch {}
  }
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [companyName, setCompanyName] = useState("");
  const [businessAge, setBusinessAge] =
    useState<OnboardingData["businessAge"]>();
  const [companySize, setCompanySize] =
    useState<OnboardingData["companySize"]>();

  const progress = useMemo(() => {
    const total = 2; // Two primary steps per requirements
    const completed = step === 0 ? 0 : step === 1 ? 1 : 2;
    return { completed, total };
  }, [step]);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-gray-600 flex items-center justify-between">
        <span>
          <strong>
            {progress.completed}/{progress.total} complete
          </strong>
        </span>
        <span>Takes less than 1 min</span>
      </div>

      {step === 0 && (
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-900">
            Enter your desired company name
          </label>
          <input
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <p className="flex items-start gap-2 text-xs text-gray-600">
            <span className="mt-0.5">💡</span>
            <span>
              Yet to finalize your brand name? Don't worry, you can always do
              this step later!
            </span>
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              className="rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-black"
              onClick={() => {
                saveSession({ companyName: companyName.trim() || undefined });
                setStep(1);
              }}
            >
              Next
            </button>
            <button
              type="button"
              className="text-sm text-indigo-700 hover:underline"
              onClick={() => {
                saveSession({ companyName: undefined });
                setStep(1);
              }}
            >
              Skip it for now
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <button
              type="button"
              className="text-gray-700 hover:underline"
              onClick={() => setStep(0)}
            >
              ← Back
            </button>
          </div>
          <label className="block text-sm font-medium text-gray-900">
            How old is your business?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <OptionButton
              active={businessAge === "not_started"}
              label="Not yet started"
              onClick={() => setBusinessAge("not_started")}
            />
            <OptionButton
              active={businessAge === "lt1"}
              label="Less than 1 year"
              onClick={() => setBusinessAge("lt1")}
            />
            <OptionButton
              active={businessAge === "1to2"}
              label="1 - 2 years"
              onClick={() => setBusinessAge("1to2")}
            />
            <OptionButton
              active={businessAge === "gt2"}
              label="2+ years"
              onClick={() => setBusinessAge("gt2")}
            />
          </div>
          <div className="flex items-center justify-end pt-2">
            <button
              type="button"
              disabled={!businessAge}
              className="rounded-md bg-gray-900 text-white px-4 py-2 disabled:opacity-50"
              onClick={() => {
                saveSession({ businessAge });
                setStep(2);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <button
              type="button"
              className="text-gray-700 hover:underline"
              onClick={() => setStep(1)}
            >
              ← Back
            </button>
          </div>
          <label className="block text-sm font-medium text-gray-900">
            Company size
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(["1-10", "11-50", "51-200", "200+"] as const).map((size) => (
              <OptionButton
                key={size}
                active={companySize === size}
                label={size}
                onClick={() => setCompanySize(size)}
              />
            ))}
          </div>
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              className="text-gray-700 hover:underline"
              onClick={() => setStep(1)}
            >
              ← Back
            </button>
            <button
              type="button"
              disabled={!companySize}
              className="rounded-md bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 disabled:opacity-50"
              onClick={() => {
                saveSession({ companySize });
                const key = `onboarding.${serviceKey}`;
                try {
                  const payload = JSON.parse(
                    sessionStorage.getItem(key) || "{}",
                  );
                  sessionStorage.setItem(
                    key,
                    JSON.stringify({ ...payload, companySize }),
                  );
                } catch {}
                if (onCompleteNavigateTo) {
                  navigate(onCompleteNavigateTo);
                  return;
                }
                const el = document.getElementById("plans");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  navigate(`/plans/${serviceKey}`);
                }
              }}
            >
              See Plans
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function OptionButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-md border px-4 py-2 text-left",
        active
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-200 hover:border-gray-400",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
