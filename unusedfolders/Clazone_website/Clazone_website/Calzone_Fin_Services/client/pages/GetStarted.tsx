import { useParams } from "react-router-dom";
import OnboardingForm from "@/components/OnboardingForm";

export default function GetStartedPage() {
  const { service = "plc" } = useParams();
  return (
    <main className="py-12 bg-gray-50 text-gray-900">
      <div className="container mx-auto max-w-2xl px-6">
        <h1 className="text-3xl font-extrabold mb-6">Get Started</h1>
        <OnboardingForm onCompleteNavigateTo={`/plans/${service}`} />
        <p className="mt-6 text-sm text-gray-600">
          Completing this takes less than a minute. You can update details
          later.
        </p>
      </div>
    </main>
  );
}
