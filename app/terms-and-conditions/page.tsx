"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TermsAndConditionsPage() {
    // Placeholder data - replace with actual data once provided by the user
    const termsData = [
        {
            topic: "USAGE TERMS",
            description: (
                <div className="space-y-4">
                    <p>• We thank you for your visit to our website www.loaninneed.in When you are a registered user or a guest user of our website, you would be referred to as a &quot;User&quot; in this terms and conditions section and if you are using our website to avail of our offered services, then you are bound to adhere to these terms and conditions (&quot;Terms of Use&quot;). Also, you are supposed to obey all the additional conditions and terms that are being listed below and in the other sections of the website as well. These terms and conditions may vary from time to time. Our team encourage all our users to read all the Terms and Conditions thoroughly whenever they opt to avail of service from our website.</p>
                    <p>• The website is owned & operated by Inifnitytank Private Limited, a company that is formally incorporated under the provisions of the Companies Act, 2013 that bears the corporate identity number (CIN) U74999DL2021PTC387440. All the references to the Website in these Terms of Use shall deem to refer to the aforesaid entity.</p>
                    <p>• The contents that are set out in this website capture an electronic record as per the terms of the Information Technology Act, 2000 and rules there as applicable & amended from time to time. This particular document legally does not require any kind of digital or physical signatures & form a valid and binding agreement between the user and the website. Furthermore, you should be reading thoroughly all the Terms and Conditions that are made available to the User pursuant & is in accordance with the provisions of Rule 3 (1) as per the Information Technology Rules set up in 2011.</p>
                    <p>• We as an owner of this website reserve all the rights to change the terms of usage at the due course of time. These changes would be effective from the date & time when the changes are posted on the website. If you use our website, you would have to accept the modified terms of usage. Any claim later on that you are not aware of the terms wouldn&apos;t be entertained under any circumstances.</p>
                </div>
            ),
        },
        {
            topic: "CUSTOMER ELIGIBILITY",
            description: (
                <div className="space-y-3">
                    <p>• The website can be used by only those people who have the status of legally making a contract as per the Indian Contract Act, 1872. The persons who are deemed to be incompetent of contracting as per the Indian Contract Act, 1872, including the minors, undischarged insolvents etc. would not be eligible for using the website under any circumstances. In case a person accessing the website is a minor (under 18 years of age), such a person would not be able to register as a User of our Website.</p>
                    <p>• We as the owner of the website reserve all the rights of terminating any membership and also refuse in providing access to our website if it is brought to our notice that the user is lesser than 18 years of age.</p>
                    <p>• By accepting all the Terms of Usage, the user of our website would irrevocably declare & undertake that he/she is a minimum of 18 years old and is capable of entering into a contract that is permissible as per the applicable laws.</p>
                    <p>• The user of our website should mandatorily hold a rupee-denominated current/savings account with any registered bank in India.</p>
                    <p>• The user must hold a Permanent Account Number (PAN) as is allotted by the centralized Income Tax Department of India.</p>
                    <p>• By accepting all the Terms of Usage, you automatically acknowledge that you have thoroughly read as well as understood all the risks that are involved in lending/borrowing of a personal loan in Durgapur or a personal loan in Bihar.</p>
                    <p>• For being eligible to be a borrower of a personal loan from our website, the User must be:</p>
                    <p className="ml-4">- The user necessarily needs to be salaried.</p>
                    <p>• In case the User is salaried, then the User:</p>
                    <p className="ml-4">- necessarily needs to be based in India;</p>
                    <p className="ml-4">- should not be unemployed at any time within the last 6 months from the date of applying for a personal loan.</p>
                    <p className="ml-4">- Should not be involved in any nature of criminal or civil litigation that is instituted against him/her.</p>
                    <p className="ml-4">- Must regularly be receiving a monthly salary in his bank account.</p>
                </div>
            ),
        },
        {
            topic: "Signing up & Registering Procedure",
            description: (
                <div className="space-y-3">
                    <p>• As directed, any person would be able to access the website either as a guest or by registering on our website. However, a guest user would be able to access all the website&apos;s sections. There are only a few sections that would be accessed only by the registered users</p>
                    <p>• All the eligible users who wish/have already registered themselves with the website would be required to have an account created on our website by filling up all the necessary details.</p>
                    <p>• By applying for the registration on our website, the User would agree and also authorize us in carrying out all the verifications and checks. As a part of the registration procedure:</p>
                    <p className="ml-4">- We shall run KYC, identity and fraud checks.</p>
                    <p className="ml-4">- Obtaining a credit rating for Users from the Credit Bureau.</p>
                    <p>• All the eligible users who wish/have already registered themselves with the website would be required to have an account created on our website by filling up all the necessary details.</p>
                    <p>• Carrying out work verification/ residence verification.</p>
                    <p>• In case a user fills in any information on your website that turns out to be false, not updated or is incomplete, the website would deem that the same has been done purposefully and thus we would have all the rights to suspend or even permanently terminate your user account and then refuse any & all current or even further usage in the future.</p>
                    <p>• The website&apos;s users may require to provide certain personal information and then expressly permit the website from accessing & collecting and retaining all the personal information of the website users. All such provisions in terms of storage, collection, usage, retention & disclosure of the Personal Information of the users shall be subject to the privacy policies of the website.</p>
                    <p>• Registration is free for anyone who registers on our website. Availing of a personal loan from our website also does not have any processing charges.</p>
                </div>
            ),
        },
        {
            topic: "Use of Website",
            description: (
                <div className="space-y-3">
                    <p>• To borrow a personal loan from our website, you must log on to www.loaninneed.in account.</p>
                    <p>• All the registered users of our website shall be solely responsible for all the activities that are related to our account and the website or the entity who is operating the website would not be responsible or liable for any kind of illegal activities including the misusage, unauthorized access or hacking of the website or any kind of refusal to access the website for any kind of reason.</p>
                    <p>• All the users of the website should necessarily be ready to confirm as well as acknowledge that they have been provided one copy of the agreement of the loan that is made between the lender and borrower. All the users should confirm that they have read as well as understood all the stated terms & conditions of the Loan Agreement and upon execution, do hereby abide by the same under any circumstances.</p>
                    <p>• In case the user realize that any of the personal information entered by them in www.loaninneed.in is being misused or being hacked, then they should immediately notify the website without causing much delay.</p>
                    <p>• We hold the right to refuse to act on any of the instructions that are received from any user we believe (a) was not clear (b) was not provided by a registered user of our website (c) might cause us in breaching a law (d) suggests that the particular website is somehow being misused for any kind of illegal purpose.</p>
                    <p>• Any kind of unauthorized access/usage to the website by the user shall be terminated to use the website temporarily or permanently.</p>
                    <p>• The user should never save or download copies and print any content of the website to use it in an unauthorized manner for any kind of commercial gain.</p>
                    <p>• The website owners have all the rights in refusing or cancelling the registration of the users and prohibiting any kind of person from using the website for any particular reason temporarily or permanently.</p>
                </div>
            ),
        },
        {
            topic: "Conditions, Terms & Lending Procedure",
            description: (
                <div className="space-y-3">
                    <p>• In case the lender wishes to lend, the lender would have the option of selecting either one or even multiple profiles of borrowers to whom the registered lender would wish to lend from the different borrower&apos;s profiles that are mentioned on the website.</p>
                    <p>• The loan&apos;s lender would agree in offering the first loan within the first thirty days from the registration date on the website.</p>
                    <p>• On selection of the borrower, the Registered Lender would be able to transfer an amount that is equivalent to the amount that the borrower wishes to lend without any deduction.</p>
                    <p>• There would necessarily be an agreement between the borrower and lender.</p>
                    <p>• The personal loan amount would be transferred to the bank account of the borrower.</p>
                </div>
            ),
        },
        {
            topic: "Terms for Borrowing",
            description: (
                <div className="space-y-3">
                    <p>• A borrower is eligible to borrow from our website by mentioning a requirement of a personal loan and completing the application procedure by filling up all the details.</p>
                    <p>• In the course of the registration procedure, a borrower should necessarily enter the complete details of his/her bank account for the purpose of repayment.</p>
                    <p>• Once a borrower posts a requirement for a loan, he/she agrees:</p>
                    <p className="ml-4">- In providing us all the necessary additional information that is required for the successful processing of the loan.</p>
                    <p className="ml-4">- Authorizing our team to check the applicant&apos;s credit rating by obtaining the same from any of the authorized Credit Information Bureau in India.</p>
                    <p>• The loan amount that is approved by the Lender should necessarily be acceptable by the borrower.</p>
                </div>
            ),
        },
        {
            topic: "Payment Settlements",
            description: (
                <div className="space-y-3">
                    <p>• Any monies that are received from the borrower include the delay charges or any kind of late fees or any nature of penal charges.</p>
                    <p>• These would be treated as a credit to the lender&apos;s www.loaninneed.in account. The lender can see this information anytime by logging into one&apos;s registered account.</p>
                    <p>• All the collected repayments would be transferred to the lender&apos;s www.loaninneed.in account and the balance would reflect all the received EMIs in real-time. However, it may take up to 3 days for the EMI receipt to reflect on the borrower&apos;s account in easefincare.in.</p>
                </div>
            ),
        },
        {
            topic: "Administration of Loan",
            description: (
                <div className="space-y-3">
                    <p>• EMI: The EMIs would start from the date of the loan disbursement. The lender would start earning interest after 5 days from his date of investment or at the loan disbursement day, whichever is earlier.</p>
                    <p>• Terms of prepayment: Any borrower who majorly wishes in prepaying a loan can opt for the same without paying any kind of prepayment charges.</p>
                    <p>• Missed repayments:</p>
                    <p className="ml-4">- If a borrower somehow misses a repayment, the borrower should inform the company by writing into the given email id. On receipt of any such email by us, we can take any of the below-mentioned actions:</p>
                    <p className="ml-8">- Explain the charges for the delay</p>
                    <p className="ml-8">- Informing the lender regarding this delay.</p>
                    <p className="ml-8">- If the borrower&apos;s account is to be reported in the Defaulter&apos;s category</p>
                    <p className="ml-8">- Informing the Credit Information Bureau regarding the borrower&apos;s payment default.</p>
                    <p>• Borrowers under the default category: A borrower would be tagged under the category of &apos;default&apos;</p>
                    <p className="ml-4">- In case he/she misses three consecutive repayments.</p>
                    <p className="ml-4">- If we receive a confirmation of the borrower&apos;s death.</p>
                    <p className="ml-4">- Any other specific situation where the borrower is unable to make any further repayment.</p>
                </div>
            ),
        },
        {
            topic: "Closing your Loan In Need loan account",
            description: (
                <div className="space-y-3">
                    <p>• Once you have repaid your loan amount completely, you may choose to close your loan account with us by writing us an email.</p>
                    <p>• We hold the right of terminating the registration of your loan account if you have provided some false information or have breached the terms of usage. Also, we terminate a loan account with us if we receive a confirmation that the borrower has died.</p>
                    <p>• We also hold the right to terminate your loan account if we suspect or receive a confirmation that you are engaged in fraudulent activity and somehow spoiling the website&apos;s reputation or engaged in some activities that are against the interest of our website.</p>
                </div>
            ),
        },
        {
            topic: "Data protection and privacy",
            description: (
                <div className="space-y-3">
                    <p>• Service communications would be sent by us to your registered mobile number and email ID from time to time. These notifications can&apos;t be stopped if you are a registered user on our website.</p>
                    <p>• Occasional updates: When you have registered on www.loaninneed.in, you would have the option of either receiving or not receiving the occasional updates by the company. This would be as per your consent.</p>
                </div>
            ),
        },
        {
            topic: "Content usage",
            description: (
                <div className="space-y-3">
                    <p>• While one is using our website, the user should never undertake to display, host, modify, upload, transmit, publish, share or update any information that:</p>
                    <p className="ml-4">- Belongs to any other person</p>
                    <p className="ml-4">- Is harassing, harmful, defamatory, blasphemous, pornographic, obscene and invasive to any other individual&apos;s privacy.</p>
                    <p className="ml-4">- Harms the minors in any probable way.</p>
                    <p className="ml-4">- Impersonates any entity or person, falsely misinterprets the affiliation of a user.</p>
                    <p className="ml-4">- Threatens the integrity, unity, sovereignty & security of India in any probable way.</p>
                </div>
            ),
        },
        {
            topic: "Intellectual Property Rights",
            description: (
                <p>• IPR or Intellectual Property Rights of the website and its owners are reserved. Any of these should not in copied under any circumstances.</p>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb & Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                        <Link href="/" className="hover:text-[#F46300] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="font-medium text-gray-900">Terms & Conditions</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[3px] w-12 bg-[#F46300]"></div>
                        <span className="text-[#F46300] font-semibold tracking-wider uppercase text-sm">
                            Legal Information
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1E3B] mb-6">
                        Terms and Conditions
                    </h1>
                    <p className="text-lg text-gray-600">
                        Please read these terms carefully before using our services. Click on the topics below to expand and view the full descriptions.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-gray-100">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-4"
                        defaultValue="item-0"
                    >
                        {termsData.map((term, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-gray-100 rounded-xl px-2 shadow-sm [&[data-state=open]]:bg-[#fff3eb] [&[data-state=open]]:border-orange-100 transition-colors"
                            >
                                <AccordionTrigger className="hover:no-underline px-4 py-5 [&[data-state=open]]:text-[#F46300] font-bold text-lg [&[data-state=open]>svg]:text-[#F46300] text-gray-800 text-left">
                                    {term.topic}
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-5 pt-1 text-gray-600 text-base leading-relaxed">
                                    {term.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Footer Contact Prompt */}
                <div className="mt-12 text-center text-gray-600">
                    <p>If you have any questions regarding these terms, please <Link href="/contact" className="text-[#F46300] font-semibold hover:underline">contact our support team</Link>.</p>
                </div>

            </div>
        </div>
    );
}
