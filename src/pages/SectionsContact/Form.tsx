import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateMessage = (value: string) => {
    if (!value.trim()) {
      setMessageError("Message cannot be empty");
      return false;
    }
    if (value.length < 10) {
      setMessageError("Message must be at least 10 characters long");
      return false;
    }
    setMessageError("");
    return true;
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const isMessageValid = validateMessage(message);

  //   if (isMessageValid) {
  //     console.log({ name, email, subject, message });
  //     toast.success("Message sent successfully!");

  //     setName("");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //   } else {
  //     toast.error(messageError || "Please fix the errors before submitting");
  //   }
  // };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50  p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-xl  overflow-hidden container">
        <div className="w-full md:w-1/3 bg-white p-8 flex flex-col justify-center space-y-12 ">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="flex items-center justify-center w-10 h-10">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-700">
                2715 Ash Dr. San Jose, South
              </p>
              <p className="text-sm text-gray-700">Dakota 83475</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="flex items-center justify-center w-10 h-10">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-700">info@example.com</p>
              <p className="text-sm text-gray-700">help.example@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="flex items-center justify-center w-10 h-10">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-700">(303) 555-0105</p>
              <p className="text-sm text-gray-700">(503) 555-0157</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8 bg-white">
          <div className="max-w-lg mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              Just Say Hello!
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Do you fancy saying hi to our team? We'd love to hear from you.
              Fill in the form and we'll get back to you shortly.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Template Cookie</p>
                  <Input
                    placeholder="Hello!"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-gray-200 rounded"
                    required
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    example@gmail.com
                  </p>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-gray-200 rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Subject</p>
                <Input
                  placeholder=""
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border-gray-200 rounded"
                  required
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    validateMessage(e.target.value);
                  }}
                  className={`w-full min-h-[120px] border-gray-200 ${
                    messageError ? "border-red-500" : ""
                  }`}
                  required
                />
                {messageError && (
                  <p className="text-xs text-red-500 mt-1">{messageError}</p>
                )}
              </div>

              <div>
                <Button
                  type="submit"
                  className="px-8 py-2 bg-[#0A947C]  hover:bg-[rgb(16,124,106)] text-white rounded-full transition-colors"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
