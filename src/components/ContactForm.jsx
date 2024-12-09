import { useState } from "react";

export default function ContactForm({ IsSubmitted, setIsSubmitted }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim())
            newErrors.firstName = "Prénom Obligatoire!";
        if (!formData.lastName.trim()) newErrors.lastName = "Nom Obligatoire!";
        if (!formData.email.trim()) {
            newErrors.email = "Email obligatoire!";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email invalide!";
        }
        if (!formData.message.trim())
            newErrors.message = "Message Obligatoire!";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(1);
            setTimeout(() => {
                setIsSubmitted(2);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                });
            }, 3000);
        }
    };

    return (
        <form
            className="grid h-full flex-1 grid-cols-2 grid-rows-[auto] gap-x-2 gap-y-2 rounded-2xl border border-primary-800 bg-neutral-50 px-6 py-4"
            onSubmit={handleSubmit}
            noValidate
        >
            <div className="col-start-1 col-end-2 row-span-1">
                <label className="mb-16 form-label" htmlFor="lastName">
                    Nom:
                </label>
                <input
                    className="form-input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Alili"
                    onChange={handleChange}
                    required
                />
                {errors.lastName && (
                    <span id="lastNameError" className="form-error">
                        &#x26A0; {errors.lastName}
                    </span>
                )}
            </div>
            <div className="col-start-2 col-end-3 row-span-1">
                <label className="form-label" htmlFor="firstName">
                    Prénom:
                </label>
                <input
                    className="form-input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Yacine"
                    onChange={handleChange}
                    required
                />
                {errors.firstName && (
                    <span id="firstNameError" className="form-error">
                        &#x26A0; {errors.firstName}
                    </span>
                )}
            </div>
            <div className="col-span-2 row-span-1">
                <label className="form-label" htmlFor="email">
                    Email:
                </label>
                <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="abc@xyz.com"
                    onChange={handleChange}
                    required
                />
                {errors.email && (
                    <span id="emailError" className="form-error">
                        &#x26A0; {errors.email}
                    </span>
                )}
            </div>
            <div className="col-span-2 row-span-3">
                <label className="form-label" htmlFor="message">
                    Message:
                </label>
                <textarea
                    className="form-input rounded-2xl"
                    type="text"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    placeholder="Message..."
                    onChange={handleChange}
                    required
                />
                {errors.message && (
                    <span id="lastNameError" className="form-error">
                        &#x26A0; {errors.message}
                    </span>
                )}
            </div>
            <button
                className="btn-primary-dark col-span-2 row-span-1 w-full"
                type="submit"
            >
                Envoyer
            </button>
        </form>
    );
}
