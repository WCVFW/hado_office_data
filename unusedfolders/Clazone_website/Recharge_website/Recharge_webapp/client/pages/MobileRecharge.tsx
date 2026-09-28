import React, { useState } from "react";
import axios from "axios";

export default function MobileRechargePlans() {
  const [mobile, setMobile] = useState("");
  const [operator, setOperator] = useState("");
  const [circle, setCircle] = useState("");
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchPlans = async () => {
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // 1️⃣ Fetch Operator & Circle
      const operatorUrl = `https://planapi.in/api/Mobile/OperatorFetchNew?ApiUserID=6659&ApiPassword=Prakash@1482&Mobileno=${mobile}`;
      const opRes = await axios.get(operatorUrl);

      if (opRes.data && opRes.data.length > 0) {
        const { operator_code, operator_name, circle_code, circle_name } = opRes.data[0];
        setOperator(operator_name);
        setCircle(circle_name);

        // 2️⃣ Fetch Plans using Operator & Circle
        const planUrl = `https://planapi.in/api/Mobile/NewMobilePlans?apimember_id=6659&api_password=Prakash@1482&operatorcode=${operator_code}&cricle=${circle_code}`;
        const planRes = await axios.get(planUrl);

        if (planRes.data && planRes.data.length > 0) {
          setPlans(planRes.data);
        } else {
          setError("No plans found for this operator and circle.");
        }
      } else {
        setError("Could not fetch operator for this number.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching plans. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          📱 Mobile Recharge Plans
        </h2>

        <input
          type="number"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleFetchPlans}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          {loading ? "Fetching Plans..." : "Check Plans"}
        </button>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        {operator && (
          <div className="mt-4 text-sm text-gray-700">
            <p><b>Operator:</b> {operator}</p>
            <p><b>Circle:</b> {circle}</p>
          </div>
        )}

        {plans.length > 0 && (
          <div className="mt-5">
            <h3 className="text-lg font-semibold mb-2">Available Plans</h3>
            <div className="max-h-80 overflow-y-auto space-y-3">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md p-3 bg-gray-50 hover:shadow-md transition"
                >
                  <p className="text-lg font-bold text-blue-600">₹{plan.rs}</p>
                  <p className="text-sm text-gray-700">{plan.desc}</p>
                  <p className="text-sm text-gray-500">Validity: {plan.validity}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
