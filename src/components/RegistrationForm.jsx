import { useState } from "react";
import { Users, CheckCircle2 } from "lucide-react";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    city: "",
    country: "",
    relationNotes: "",
    consent: false,
  });

  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.fullName || !form.branch || !form.consent) return;
    setLoading(true);
    // No backend call yet; just simulate a successful submission
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
    setForm({
      fullName: "",
      email: "",
      phone: "",
      branch: "",
      city: "",
      country: "",
      relationNotes: "",
      consent: false,
    });
  }

  return (
    <section id="register" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-md bg-emerald-100 text-emerald-700">
            <Users size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Clan Registry</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-1">Register your family</h3>
            <p className="text-sm text-gray-600 mb-6">
              Submit your details to be added to the official SANGKULA CLAN family tree. An admin will verify your submission.
            </p>

            {submitted ? (
              <div className="flex items-start gap-3 rounded-md bg-emerald-50 border border-emerald-200 p-4">
                <CheckCircle2 className="text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-emerald-800">Submission received</p>
                  <p className="text-sm text-emerald-700">
                    Thank you. You will be contacted by an administrator after verification.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Full name</label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="e.g., Aisha binti Sangkula"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="+63 9xx xxx xxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Family branch</label>
                  <input
                    name="branch"
                    value={form.branch}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="e.g., Zamboanga City branch"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={onChange}
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="City / Municipality"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    name="country"
                    value={form.country}
                    onChange={onChange}
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Relation notes</label>
                  <input
                    name="relationNotes"
                    value={form.relationNotes}
                    onChange={onChange}
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="e.g., Descendant of ..."
                  />
                </div>

                <div className="sm:col-span-2 flex items-start gap-2 mt-2">
                  <input
                    id="consent"
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={onChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I confirm the information provided is accurate and agree to its use for clan registry and genealogy purposes.
                  </label>
                </div>

                <div className="sm:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={loading || !form.fullName || !form.branch || !form.consent}
                    className="w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Submit Registration"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-1">Why register?</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
              <li>Be recognized within the official Naqib Sangkula lineage.</li>
              <li>Receive updates on events, programs, and opportunities.</li>
              <li>Help preserve our shared heritage for future generations.</li>
              <li>Access member-only resources as they become available.</li>
            </ul>
            <div className="mt-6 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-sm">
              Data Privacy: Your information is used solely for clan governance, communication, and genealogical records.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
