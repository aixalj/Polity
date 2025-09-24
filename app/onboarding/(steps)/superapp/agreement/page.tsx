import OnboardingBlock from "@/components/onboardingblock";

import { File02 } from "@untitled-ui/icons-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Agreement() {
  return (
    <OnboardingBlock
      icon={<File02 className="w-8 h-8 text-gray-700" />}
      title="Network Service Agreement"
      description={(
        <>
          By signing this Agreement you accept the terms and conditions of services by Bastion Cooperative to provide you with access to the Network and two free Application Virtual Nodes to enable you to create two Avatars.
          <span className="-mt-6"></span>
          Would you like to proceed and complete installation of your first free Avatar?
        </>
      )}
    >
      <div className="max-h-[70vh] px-6 py-2 text-sm pb-32 overflow-y-scroll">
        (Document will continue to be updated as we develop Polity Private MVP)<br /> <br /> 
        This Network Service Agreement (the “Agreement”) is entered into by and
        between Bastion Genossenschaft, with its registered office at
        Schaanerstrasse 27, Vaduz 9490, Principality of Liechtenstein and acting
        as a Polity Network service provider (“NSP”), and the individual or
        legal entity, who by installing a free Application Virtual Node (“AVN”) is
        agreeing to this Agreement (“You”).<br /> <br /> By installing and/or using an AVN,
        you expressly accept and agree to the terms of this Agreement. If you
        are an individual agreeing to the terms of this Agreement on behalf of
        an entity (the “Company”), you represent that you have the legal
        authority to bind that entity. <br /> <br /> By accepting this Agreement, You
        represent and warrant that any and all information you provide is true,
        accurate and complete. <br /> <br />  This Agreement may be modified at any time for
        any reason. Amendments to this Agreement will be effective upon the NSP
        posting the changes online or as a notification to your Avatar. You must
        ensure that you have read, understood, and agree to the terms of this
        Agreement. This Agreement is subject to the Disclaimer, Terms of Use and
        the Privacy Policy incorporated herein by reference. <br /> <br />Your continued use
        of at least one AVN represents your acceptance and agreement to be bound
        by the most recent version of this Agreement.<br /> <br />RECITALS <br /> <br />WHEREAS, the AVN
        (including documentation and Open Source AVN components provided with
        such AVN, as defined below) is technology licensed by Bastion, and;<br /> <br />
        WHEREAS, You, the individual or Company, desire to use the AVN for
        Polity Private MVP software testing purposes;<br /> <br />NOW THEREFORE, the parties
        hereby agree as follows:<br /> <br /> 1. Grant of Free License <br /> <br />Bastion hereby grants
        to You, and You hereby accept from Bastion a non-exclusive,
        non-transferable license without a right to sublicense to install and
        use up to 2 (two) free AVNs for Polity Network Private MVP testing
        purposes and to benefit from the free installation assistance and
        technical support services thereof. <br /> <br />2. Restrictions <br /> <br />You shall not, and
        shall not authorize any third party, to: (a) copy the AVNs or allow
        copies of the AVN to be made for any purpose, (b) duplicate the
        associated documentation for any purpose; (c) modify, alter, create
        derivative works, reverse engineer, decompile, or disassemble the AVNs
        in any manner; (d) sell, sublicense, lease or otherwise transfer the
        AVNs in any way; and (e) use the AVNs in a hosting or service bureau
        basis or use the AVNs to provide services to third parties.<br /> <br /> 3.
        Confidential Information. <br /> <br />Bastion and You agree to retain in confidence
        the non-public information, know-how and trade secrets that should
        reasonably be understood to be confidential by the recipient. The AVN
        and any documentation and the terms and conditions of this Agreement
        shall be Bastion’s Confidential Information. You agree that Bastion may
        refer to the Company’s name and trademarks in Bastion’s marketing
        materials and website; however, Bastion will not use Company’s name or
        trademarks in any other publicity (e.g., press releases and customer
        references) without Company’s prior written consent.<br /> <br /> 4. Term and
        Termination <br /> <br />Bastion agrees, subject to the terms set forth in this
        Agreement, to make the AVN available to Company for a term to expire on
        the earlier of: (a) the end of 12 months from the date You signed the
        Agreement; or (b) 31 March 2025 (the “Free Period”). Bastion may also
        terminate the Free Period at any time and at its sole discretion by
        providing notice to You.<br /> <br /> 5. Ownership <br /> <br />Bastion and its providers retain
        all right, title and interest in and to the AVNs, the license keys
        issued to use the AVNs, and in all related patents, copyrights,
        trademarks, trade secrets and any other intellectual and industrial
        property and proprietary rights thereto, including registrations,
        applications, renewals and extensions of such rights. You receive from
        Bastion and retain your AVNs private keys and at all times have
        possession and control of your AVNs and retain ownership of all digital
        assets stored in the wallets connected to the AVNs. <br /> <br />6. No Warranty <br /> <br />The
        AVNs are provided and licensed hereunder on an “AS IS” basis. To the
        maximum extent permitted by applicable law, Bastion disclaims all
        warranties, express or implied, with respect to such AVNs, including but
        not limited to, implied warranties of merchantability and fitness for a
        particular purpose or use. <br /> <br />7. Disclaimer of Liability <br /> <br />BASTION SHALL NOT
        BE LIABLE FOR ANY DAMAGES WHATSOEVER WITH RESPECT TO THE USE OR
        OPERATION OF THE AVNS, WHETHER DIRECT, SPECIAL, CONSEQUENTIAL,
        COLLATERAL, OR INCIDENTAL, INCLUDING BUT NOT LIMITED TO LOSS OF DATA,
        LOSS OF PROFITS, LOSS OF USE OR INTERRUPTION OF BUSINESS. BASTION’S
        TOTAL LIABILITY FOR DIRECT DAMAGES HEREUNDER SHALL NOT EXCEED ONE U.S.
        DOLLAR ($1.00). COMPANY MAY HAVE OTHER RIGHTS THAT VARY BY JURISDICTION.<br /> <br />
        8. Indemnification <br /> <br />You agree to indemnify Bastion against any claim,
        damages, cost, loss, expense or any kind of liability arising in
        connection with any claims, suits, demands, arising out of this
        Agreement. <br /> <br />9. Open Source AVN <br /> <br />“Open Source AVN” means various AVN
        components, including open source R3 Corda 5.0 Developer Preview 1 and
        patches thereof that may be provided to You in connection with the
        provision of Services that may be part of the AVN. The Open Source AVN
        is licensed to You under their own applicable license terms and
        conditions, which can be found in their providers’ documentation. <br /> <br />10.
        General Provisions <br /> <br />(a) The validity, construction and performance of
        this Agreement shall be governed by and construed in accordance with the
        laws of Liechtenstein. The Parties expressly disclaim the applicability
        of, and waive any rights based upon, the Uniform Computer Information
        Transactions Act or the United Nations Convention on Contracts for the
        International Sale of Goods. Each Party hereby waives any right to jury
        trial in connection with any action or litigation in any way arising out
        of or related to this Agreement. <br /> <br />(b) If any provision of this Agreement
        is found to be invalid or unenforceable by a court of competent
        jurisdiction, such provision shall be enforced to the full extent
        possible and without effect on the remaining provisions of this
        Agreement, which shall remain in full force and effect. <br /> <br />(c) The failure
        of either party to enforce any provision of this Agreement shall in no
        way be construed to be a waiver of such provision, nor in any way affect
        the right of either party to enforce each and every provision of this
        Agreement thereafter. <br /> <br />(d) (This Agreement may not be assigned by You the
        individual or Company and any attempted assignment shall be null and
        void. Subject to the foregoing, this Agreement will be binding upon and
        will inure to the benefit of the parties and their respective successors
        and assigns. <br /> <br />(e) The following provisions shall survive termination or
        expiration of this Agreement: Sections 2, 3, 4, 5, 6, 7, 8, 9, 10 and
        11. <br /> <br />11. The Entire Agreement <br /> <br />This Agreement comprises the entire
        agreement between You the individual or Company and Bastion, and
        supersedes all prior or contemporaneous proposals, quotes, negotiations,
        discussions, or agreements, whether written or oral, between the parties
        regarding its subject matter.
      </div>
      <div className="flex px-6 pt-6 pb-5 bg-white border-t border-gray-200 absolute bottom-0 w-full">
        <Link href="/onboarding/superapp/installation" className="w-full">
          <Button className="min-w-full">Agree & Continue</Button>
        </Link>
      </div>
    </OnboardingBlock>
  );
}
