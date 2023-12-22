import React, { useState, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { CustomerContext } from "../../context/CustomerContext";

const AddCustomer = () => {
  const { addCustomers } = useContext(CustomerContext);
  const [customerData, setCustomerData] = useState({
    aadhar_num: 0,
    name_of_candidate: "",
    candidate_contact_num: 0,
    candidate_alt_contact_num: 0,
    candidate_gender: "",
    candidate_email_id: "",
    candidate_dob: "",
    candidate_marital_status: "",
    if_married: "",
    candidate_academic_qlf: "",
    caste: "",
    father_name: "",
    father_age: 0,
    father_education: "",
    father_occupation: "",
    father_contact: 0,
    father_annual_income: 0,
    mother_name: "",
    mother_age: 0,
    mother_education: "",
    mother_occupation: "",
    mother_contact: 0,
    mother_annual_income: 0,
    spouse_name: "",
    spouse_age: 0,
    spouse_qlf: "",
    spouse_occupation: "",
    spouse_annual_income: 0,
    
    door_num: "",
    village: "",
    gram_pamchayat: "",
    post_office: "",
    mandal: "",
    district: "",
    
    ssc_name_of_school: "",
    special_school: "",
    type_of_school_board: "",
    inter_college_name: "",
    special_college: "",
    type_of_college_board: "",
    graduation_college: "",
    university_name: "",
    special_degree_collage: "",
    university_type: "",
    name_of_phd_college: "",
    specialization: "",
    type_of_phd_university: "",
    other_courses: "",
    
    computer_skills: "",
    typing_speed: "",
    language_skills: "",
    other_languages: "",
    
    employment_status: "",
    last_drawn_salary: "",
    work_exp: "",
    exp1: 0,
    exp2: 0,
    
    name_of_bank: "",
    account_number: 0,
    name_of_branch: "",
    ifsc_code: "",
    
    driving_awareness: "",
    driving_license: "",
    license_num: 0,
    vehicle_status: "",
    vehicle_num: "",
    
    health_issues: "",
    type_of_issue: "",
    
    total_family_members: 0,
    any_family_pwds: "",
    num_of_pwds: "",
    
    family_mem1_name: "",
    family_mem1_relation: "",
    family_mem1_gender: "",
    family_mem1_age: 0,
    family_mem1_education: "",
    family_mem1_occupation: "",
    family_mem1_annual_income: "",
    family_mem1_contact: 0,
    
    family_mem2_name: "",
    family_mem2_relation: "",
    family_mem2_gender: "",
    family_mem2_age: 0,
    family_mem2_education: "",
    family_mem2_occupation: "",
    family_mem2_annual_income: "",
    family_mem2_contact: 0,
    
    family_mem3_name: "",
    family_mem3_relation: "",
    family_mem3_gender: "",
    family_mem3_age: 0,
    family_mem3_education: "",
    family_mem3_occupation: "",
    family_mem3_annual_income: "",
    family_mem3_contact: 0,
    
    family_mem4_name: "",
    family_mem4_relation: "",
    family_mem4_gender: "",
    family_mem4_age: 0,
    family_mem4_education: "",
    family_mem4_occupation: "",
    family_mem4_annual_income: "",
    family_mem4_contact: 0,
    
    family_mem5_name: "",
    family_mem5_relation: "",
    family_mem5_gender: "",
    family_mem5_age: 0,
    family_mem5_education: "",
    family_mem5_occupation: "",
    family_mem5_annual_income: "",
    family_mem5_contact: 0,
    
    family_mem6_name: "",
    family_mem6_relation: "",
    family_mem6_gender: "",
    family_mem6_age: 0,
    family_mem6_education: "",
    family_mem6_occupation: "",
    family_mem6_annual_income: "",
    family_mem6_contact: 0,
    
    is_disability_person: "",
    is_disability_certificate: "",
    reason_for_no_certificate: "",
    disability_type: "",
    disability_percentage: "",
    is_dependent_on_daily_activities: "",
    is_disability_pension: "",
    reason_for_no_pension: "",
    
    disability_schema_awareness: "",
    disability_schema_awailense: "",
    
    aadhar_card_upload: "",
    ration_card_upload: "",
    ration_card_num: 0,
    voter_id_upload: "",
    voter_id_num: 0,
    pan_card_upload: "",
    pan_card_num: "",
    disability_certificate_upload: "",
    disability_certificate_num: 0,
    photo_upload: "",
    ssc_proof_upload: "",
    ssc_proof_num: 0,
    ssc_pass_memo_upload: "",
    ssc_memo_num: 0,
    inter_certificate_upload: "",
    inter_memo_num: 0,
    graduation_memo_upload: "",
    graduation_memo_num: 0,
    post_graduation_memo_upload: "",
    post_graduation_memo_num: 0,
    phd_memo_upload: "",
    phd_memo_num: 0,
    technical_iti_upload: "",
    technical_memo_num: 0,
    vocational_upload: "",
    vocational_memo_num: 0,
    diploma_upload: "",
    diploma_memo_num: 0,
    income_certificate_upload: "",
    income_certificate_num: 0,
    marriage_certificate_upload: "",
    marriage_certificate_num: 0,
    driving_license_upload: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await BasePath.post("/customers", customerData);
      console.log(response.data.data);
      addCustomers(response.data.data.Customers);
    } catch (err) {
      console.log(err);
    }
  };

	const [openAccordion, setOpenAccordion] = useState(null);
	const handleAccordionToggle = (accordionId) => {
		setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
	};

  return (
    <>
      <div className="beginning-header">
        <h4 className="side-heading">Add A Customer</h4>
        <div className="mb-4" style={{ marginTop: "30px" }}>
          {/* Form to be fill */}
          <form action="">

            {/* Section - 1: Personal Details Accordion */}
            <div className="accordion mb-4" id="personalDetailsAccordion">
              <div className="accordion-item">
                <h5 className="accordion-header"
                id="personalDetailsHeading"
                style={{ backgroundColor: "#f1f1f1", padding: "10px", borderBottom: "1px solid #ddd", cursor: "pointer" }}
                onClick={() => { 
                  document.getElementById('personalDetailsCollapse').classList.toggle('show');
                  handleAccordionToggle("personalDetailsCollapse"); }}>
                  Personal Details
                </h5>
                <div
                  id="personalDetailsCollapse"
                  className={`accordion-collapse collapse ${
                    openAccordion === "personalDetailsCollapse" ? "show" : ""
                  }`}
                  aria-labelledby="personalDetailsHeading"
                  data-bs-parent="#personalDetailsAccordion"
                  style={{ backgroundColor: "#f5f5f5", padding: "15px" }}
                >
                  <div className="accordion-body">
                    <div className="accordion-body-content">
                      {/* Fields 1 to 28 */}
                      <div className="form-row">

                        {/* Field 1: Aadhar Number */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="aadhar_num">
                            Aadhar Number<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="aadhar_num"
                            name="aadhar_num"
                            value={customerData.aadhar_num || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 2: Name*/}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="name_of_candidate">
                            Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="name_of_candidate"
                            name="name_of_candidate"
                            value={customerData.name_of_candidate || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 3: Contact Number */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="candidate_contact_num">
                          Contact Number<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="candidate_contact_num"
                            name="candidate_contact_num"
                            value={customerData.candidate_contact_num || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 4: Alternate Contact Number */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="candidate_alt_contact_num">
                          Alternate Contact Number<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="candidate_alt_contact_num"
                            name="candidate_alt_contact_num"
                            value={customerData.candidate_alt_contact_num || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 5: Gender */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="candidate_gender">
                          Gender<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="candidate_gender"
                            name="candidate_gender"
                            value={customerData.candidate_gender || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                          </select>
                        </div>

                        {/* Field 6: Email */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="candidate_email_id">
                          Email<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="candidate_email_id"
                            name="candidate_email_id"
                            value={customerData.candidate_email_id || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 7: DOB */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="candidate_dob">
                          Date of Birth<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="date"
                            id="candidate_dob"
                            name="candidate_dob"
                            value={customerData.candidate_dob || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 8: Marital Status */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="candidate_marital_status">
                          Marital Status<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="candidate_marital_status"
                            name="candidate_marital_status"
                            value={customerData.candidate_marital_status || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widow">Widow</option>
                          </select>
                        </div>

                        {/* Field 9: If Married */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="if_married">
                          If Married<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="if_married"
                            name="if_married"
                            value={customerData.if_married || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="PwD">PwD</option>
                            <option value="Non PwD">Non PwD</option>
                          </select>
                        </div>

                        {/* Field 10: Academic Qualification */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="candidate_academic_qlf">
                          Academic Qualification<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="candidate_academic_qlf"
                            name="candidate_academic_qlf"
                            value={customerData.candidate_academic_qlf || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Below SSC">Below SSC</option>
                            <option value="SSC">SSC</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Post Graduate">Post Graduate</option>
                            <option value="PHD">PHD</option>
                          </select>
                        </div>

                        {/* Field 11: Caste */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="caste">
                          Caste<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="caste"
                            name="caste"
                            value={customerData.caste || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                            <option value="OBC">OBC</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* Field 12: Father Name */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="father_name">
                          Father Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="father_name"
                            name="father_name"
                            value={customerData.father_name || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 13: Father Age */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="father_age">
                          Father Age<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="father_age"
                            name="father_age"
                            value={customerData.father_age || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 14: Father Education */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="father_education">
                          Father Education<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="father_education"
                            name="father_education"
                            value={customerData.father_education || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Below SSC">Below SSC</option>
                            <option value="SSC">SSC</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Post Graduate">Post Graduate</option>
                            <option value="PHD">PHD</option>
                          </select>
                        </div>

                        {/* Field 15: Father Occupation */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="father_occupation">
                          Father Occupation<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="father_occupation"
                            name="father_occupation"
                            value={customerData.father_occupation || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Skilled Labour">Skilled Labour</option>
                            <option value="Govt Retired">Govt Retired</option>
                            <option value="Self-Employee Small Scale">Self-Employee Small Scale</option>
                            <option value="Self-Employee Large Scale">Self-Employee Large Scale</option>
                            <option value="Daily Wages">Daily Wages</option>
                            <option value="Senior Citizen">Senior Citizen</option>
                            <option value="Private Employee">Private Employee</option>
                            <option value="Ex - Army">Ex - Army</option>
                            <option value="Contract Labour">Contract Labour</option>
                            <option value="Contract Employee">Contract Employee</option>
                            <option value="Dependent">Dependent</option>
                            <option value="Pensioner">Pensioner</option>
                            <option value="Late">Late</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>

                        {/* Field 16: Father Contact */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="father_contact">
                          Father's Contact<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="father_contact"
                            name="father_contact"
                            value={customerData.father_contact || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 17: Father's Annual Income */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="father_annual_income">
                          Father's Annual Income<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="father_annual_income"
                            name="father_annual_income"
                            value={customerData.father_annual_income || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Not Applicable">Not Applicable</option>
                            <option value="Below 25000">Below 25000</option>
                            <option value="26000 to 60000">26000 to 60000</option>
                            <option value="61000 to 99000">61000 to 99000</option>
                            <option value="1 Lakh to 2 Lakh">1 Lakh to 2 Lakh</option>
                            <option value="2 Lakh to 3 Lakh">2 Lakh to 3 Lakh</option>
                            <option value="3 Lakh & Above">3 Lakh & Above</option>
                          </select>
                        </div>

                        {/* Field 18: Mother Name */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="mother_name">
                          Mother Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="mother_name"
                            name="mother_name"
                            value={customerData.mother_name || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 19: Mother Age */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="mother_age">
                          Mother Age<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="mother_age"
                            name="mother_age"
                            value={customerData.mother_age || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 20: Mother Education */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="mother_education">
                          Mother Education<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="mother_education"
                            name="mother_education"
                            value={customerData.mother_education || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Below SSC">Below SSC</option>
                            <option value="SSC">SSC</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Post Graduate">Post Graduate</option>
                            <option value="PHD">PHD</option>
                          </select>
                        </div>

                        {/* Field 21: Mother Occupation */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="mother_occupation">
                          Mother Occupation<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="mother_occupation"
                            name="mother_occupation"
                            value={customerData.mother_occupation || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Skilled Labour">Skilled Labour</option>
                            <option value="Govt Retired">Govt Retired</option>
                            <option value="Self-Employee Small Scale">Self-Employee Small Scale</option>
                            <option value="Self-Employee Large Scale">Self-Employee Large Scale</option>
                            <option value="Daily Wages">Daily Wages</option>
                            <option value="Senior Citizen">Senior Citizen</option>
                            <option value="Private Employee">Private Employee</option>
                            <option value="Ex - Army">Ex - Army</option>
                            <option value="Contract Labour">Contract Labour</option>
                            <option value="Contract Employee">Contract Employee</option>
                            <option value="Dependent">Dependent</option>
                            <option value="Pensioner">Pensioner</option>
                            <option value="Late">Late</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>

                        {/* Field 22: Mother's Contact */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="mother_contact">
                          Mother's Contact<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="mother_contact"
                            name="mother_contact"
                            value={customerData.mother_contact || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 23: Mother's Annual Income */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="mother_annual_income">
                          Mother's Annual Income<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="mother_annual_income"
                            name="mother_annual_income"
                            value={customerData.mother_annual_income || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Not Applicable">Not Applicable</option>
                            <option value="Below 25000">Below 25000</option>
                            <option value="26000 to 60000">26000 to 60000</option>
                            <option value="61000 to 99000">61000 to 99000</option>
                            <option value="1 Lakh to 2 Lakh">1 Lakh to 2 Lakh</option>
                            <option value="2 Lakh to 3 Lakh">2 Lakh to 3 Lakh</option>
                            <option value="3 Lakh & Above">3 Lakh & Above</option>
                          </select>
                        </div>

                        {/* Field 24: Spouse Name */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="spouse_name">
                          Spouse Name (if married)<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="spouse_name"
                            name="spouse_name"
                            value={customerData.spouse_name || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 25: Spouse Age */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="spouse_age">
                          Spouse Age<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="spouse_age"
                            name="spouse_age"
                            value={customerData.spouse_age || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 26: Spouse Qualification */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="spouse_qlf">
                          Spouse Qualification<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="spouse_qlf"
                            name="spouse_qlf"
                            value={customerData.spouse_qlf || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Below SSC">Below SSC</option>
                            <option value="SSC">SSC</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Post Graduate">Post Graduate</option>
                            <option value="PHD">PHD</option>
                          </select>
                        </div>

                        {/* Field 27: Spouse Occupation */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="spouse_occupation">
                          Spouse Occupation<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="spouse_occupation"
                            name="spouse_occupation"
                            value={customerData.spouse_occupation || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Skilled Labour">Skilled Labour</option>
                            <option value="Govt Retired">Govt Retired</option>
                            <option value="Self-Employee Small Scale">Self-Employee Small Scale</option>
                            <option value="Self-Employee Large Scale">Self-Employee Large Scale</option>
                            <option value="Daily Wages">Daily Wages</option>
                            <option value="Senior Citizen">Senior Citizen</option>
                            <option value="Private Employee">Private Employee</option>
                            <option value="Ex - Army">Ex - Army</option>
                            <option value="Contract Labour">Contract Labour</option>
                            <option value="Contract Employee">Contract Employee</option>
                            <option value="Dependent">Dependent</option>
                            <option value="Pensioner">Pensioner</option>
                            <option value="Late">Late</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>

                        {/* Field 28: Spouse Annual Income */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="spouse_annual_income">
                          Spouse Annual Income<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="spouse_annual_income"
                            name="spouse_annual_income"
                            value={customerData.spouse_annual_income || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Not Applicable">Not Applicable</option>
                            <option value="Below 25000">Below 25000</option>
                            <option value="26000 to 60000">26000 to 60000</option>
                            <option value="61000 to 99000">61000 to 99000</option>
                            <option value="1 Lakh to 2 Lakh">1 Lakh to 2 Lakh</option>
                            <option value="2 Lakh to 3 Lakh">2 Lakh to 3 Lakh</option>
                            <option value="3 Lakh & Above">3 Lakh & Above</option>
                          </select>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Section - 2: Residential Details Accordion */}
            <div className="accordion mb-4" id="residentialDetailsAccordion">
              <div className="accordion-item">
                <h5 className="accordion-header"
                id="residentialDetailsHeading"
                style={{ backgroundColor: "#f1f1f1", padding: "10px", borderBottom: "1px solid #ddd", cursor: "pointer" }}
                onClick={() => { 
                  document.getElementById('residentialDetailsCollapse').classList.toggle('show');
                  handleAccordionToggle("residentialDetailsCollapse"); }}>
                  Residential Details
                </h5>
                <div
                  id="residentialDetailsCollapse"
                  className={`accordion-collapse collapse ${
                    openAccordion === "residentialDetailsCollapse" ? "show" : ""
                  }`}
                  aria-labelledby="residentialDetailsHeading"
                  data-bs-parent="#residentialDetailsAccordion"
                  style={{ backgroundColor: "#f5f5f5", padding: "15px" }}
                >
                  <div className="accordion-body">
                    <div className="accordion-body-content">
                      {/* Fields 29 to 34 */}
                      <div className="form-row">

                        {/* Field 29: Door Number */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="door_num">
                            Door Number<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="door_num"
                            name="door_num"
                            value={customerData.door_num || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 30: Village */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="village">
                          Village<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="village"
                            name="village"
                            value={customerData.village || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 31: Gram Panchayat */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="gram_pamchayat">
                          Gram Panchayat<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="gram_pamchayat"
                            name="gram_pamchayat"
                            value={customerData.gram_pamchayat || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 32: Post Office */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="post_office">
                          Post Office<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="post_office"
                            name="post_office"
                            value={customerData.post_office || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 33: Mandal */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="mandal">
                          Mandal<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="mandal"
                            name="mandal"
                            value={customerData.mandal || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 34: District */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="district">
                          District<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="district"
                            name="district"
                            value={customerData.district || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Section - 3: Education Details Accordion */}
            <div className="accordion mb-4" id="educationDetailsAccordion">
              <div className="accordion-item">
                <h5 className="accordion-header"
                id="educationDetailsHeading"
                style={{ backgroundColor: "#f1f1f1", padding: "10px", borderBottom: "1px solid #ddd", cursor: "pointer" }}
                onClick={() => { 
                  document.getElementById('educationDetailsCollapse').classList.toggle('show');
                  handleAccordionToggle("educationDetailsCollapse"); }}>
                  Education Details
                </h5>
                <div
                  id="educationDetailsCollapse"
                  className={`accordion-collapse collapse ${
                    openAccordion === "educationDetailsCollapse" ? "show" : ""
                  }`}
                  aria-labelledby="educationDetailsHeading"
                  data-bs-parent="#educationDetailsAccordion"
                  style={{ backgroundColor: "#f5f5f5", padding: "15px" }}
                >
                  <div className="accordion-body">
                    <div className="accordion-body-content">
                      {/* Fields 35 to 49 */}
                      <div className="form-row">

                        {/* Field 35: Name of the School */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="ssc_name_of_school">
                            SSC - Name of the School<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="ssc_name_of_school"
                            name="ssc_name_of_school"
                            value={customerData.ssc_name_of_school || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 36: Special School */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="special_school">
                          Special School?<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="special_school"
                            name="special_school"
                            value={customerData.special_school || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>

                        {/* Field 37: SSC - Type of Board */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="type_of_school_board">
                          SSC - Type of Board<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="type_of_school_board"
                            name="type_of_school_board"
                            value={customerData.type_of_school_board || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Secondary School Certificate (SSC)">Secondary School Certificate (SSC)</option>
                            <option value="Indian Certificate of Secondary Education (ICSE)">Indian Certificate of Secondary Education (ICSE)</option>
                            <option value="Central Board of Secondary Education (CBSE)">Central Board of Secondary Education (CBSE)</option>
                            <option value="National Institute of Open Schooling (NIOS)">National Institute of Open Schooling (NIOS)</option>
                            <option value="IB School">IB School</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* Field 38: Name of the College */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="inter_college_name">
                          Inter - Name of the College<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="inter_college_name"
                            name="inter_college_name"
                            value={customerData.inter_college_name || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 39: Special College */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="special_college">
                          Special College?<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="special_college"
                            name="special_college"
                            value={customerData.special_college || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>

                        {/* Field 40: Intermediate - Type of Board */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="type_of_college_board">
                          Intermediate - Type of Board<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="type_of_college_board"
                            name="type_of_college_board"
                            value={customerData.type_of_college_board || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="State Boards of Intermediate">State Boards of Intermediate</option>
                            <option value="Indian Certificate of Secondary Education (ICSE)">Indian Certificate of Secondary Education (ICSE)</option>
                            <option value="Central Board of Secondary Education (CBSE)">Central Board of Secondary Education (CBSE)</option>
                            <option value="Council for the Indian School Certificate Examination (CISCE)">Council for the Indian School Certificate Examination (CISCE)</option>
                            <option value="National Institute of Open Schooling (NIOS)">National Institute of Open Schooling (NIOS)</option>
                            <option value="International Baccalaureate (IB)">International Baccalaureate (IB)</option>
                            <option value="Cambridge International Examinations (CIE)">Cambridge International Examinations (CIE)</option>
                          </select>
                        </div>

                        {/* Field 41: Graduation College */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="graduation_college">
                          Graduation College<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="graduation_college"
                            name="graduation_college"
                            value={customerData.graduation_college || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 42: University Name */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="university_name">
                          University Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="university_name"
                            name="university_name"
                            value={customerData.university_name || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 43: Special Degree College */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="special_degree_collage">
                          Special Degree College<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="special_degree_collage"
                            name="special_degree_collage"
                            value={customerData.special_degree_collage || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>

                        {/* Field 44: Graduate - Type of University */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="university_type">
                          Graduate - Type of University<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="university_type"
                            name="university_type"
                            value={customerData.university_type || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="State University">State University</option>
                            <option value="Central University">Central University</option>
                            <option value="Deemed University">Deemed University</option>
                            <option value="Private University">Private University</option>
                          </select>
                        </div>

                        {/* Field 45: Name of the PHD College */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="name_of_phd_college">
                          Name of the PHD College<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="name_of_phd_college"
                            name="name_of_phd_college"
                            value={customerData.name_of_phd_college || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 46: Specialization */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="specialization">
                          Specialization<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="specialization"
                            name="specialization"
                            value={customerData.specialization || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          />
                        </div>

                        {/* Field 47: PHD - Type of University */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="type_of_phd_university">
                          PHD - Type of University<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="type_of_phd_university"
                            name="type_of_phd_university"
                            value={customerData.type_of_phd_university || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="State University">State University</option>
                            <option value="Central University">Central University</option>
                            <option value="Deemed University">Deemed University</option>
                            <option value="Private University">Private University</option>
                          </select>
                        </div>

                        {/* Field 48: Other Courses */}
                        <div className="col-md-3 mb-3" style={{ marginBottom: "15px" }}>
                          <label htmlFor="other_courses">
                          Other Courses<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="other_courses"
                            name="other_courses"
                            value={customerData.other_courses || ""}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Technical ITI">Technical ITI</option>
                            <option value="Vocational">Vocational</option>
                            <option value="Diploma">Diploma</option>
                          </select>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </form>

          {/* Add Customer button */}
          <div className="form-row" d-flex justify-content-center>
            <div className="col text-center">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-danger"
              >
                Add Customer
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AddCustomer;