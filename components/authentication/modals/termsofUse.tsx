'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { File02, AlertSquare } from '@untitled-ui/icons-react';
import { useRouter } from 'next/navigation';

interface TermsOfUseProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

export function TermsOfUse({ isOpen, onClose, onAgree }: TermsOfUseProps) {
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const router = useRouter();

  const handleAgree = () => {
    onAgree();
    router.push('/authentication/select-profile');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[600px] p-0 bg-white rounded-[20px] shadow-xl'>
        {/* Header */}
        <div className='p-6 border-b border-gray-200'>
          <div className='flex flex-col items-start'>
            <AlertSquare className='w-8 h-8 mb-4 text-gray-700' />
            <div className='flex flex-col items-start'>
              <h2 className='text-xl font-medium text-gray-900 mb-1'>
                Terms of Use
              </h2>
            </div>
            <p className='text-gray-600 text-sm'>
              Please read our Terms of Use carefully to fully understand the
              rules and regulations governing your use of our services.
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className='max-h-[60vh] px-6 overflow-y-auto text-sm text-gray-600'>
          <p className='italic mb-4'>
            (Document will continue to be updated as we develop Polity Private
            MVP)
          </p>

          <p className='text-gray-600 text-sm'>
            1. Introduction <br /> <br />
            Welcome to the Polity Network (“Polity”, “Network”, “we”, “our”,
            “us”)! <br /> <br /> These Terms of Use (“Terms”, “Terms of Use”)
            constitute a legally binding agreement between you (“You”) and
            Bastion Genossenschaft (“Bastion”) governing your use of Polity
            Private Minimum Viable Product (“Private MVP”).
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            2. Definitions
            <br /> <br />
            Applicable Laws - the local law applicable to the legal relationship
            between You and Bastion;
            <br /> <br />
            Avatar – a digital persona created by You on the Polity Network and
            connected to the virtual node You control;
            <br /> <br />
            Bastion - Bastion Genossenschaft; Schaanerstrasse 27, Vaduz 9490,
            Principality of Liechtenstein
            <br /> <br />
            Company Number FL-0002.687.016-8;
            <br /> <br />
            Element.io – Polity communication partner https://element.io;
            <br /> <br />
            Legal person - a legal entity created under the relevant
            legislation, entitled to be the subject of rights and obligations
            and its own representation;
            <br /> <br />
            Natural person - a person fully entitled to be a subject of rights
            and obligations under the relevant legislation;
            <br /> <br />
            Service - any services provided by Bastion to the User on the basis
            of these Terms;
            <br /> <br />
            Third Party Rights - the rights of third parties, including
            intellectual property rights protected by law.
            <br /> <br />
            You - natural or legal person using the Website under these Terms;
            <br /> <br />
            Website - address, domain, source code and visual layer belonging to
            Bastion and used to provide the Services described in these Terms at
            the Private MVP stage of Polity development and testing;
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            3. General
            <br /> <br />
            Polity Private MVP is intended for testing and demonstration
            purposes only. It is provided on a pro-bono basis in a
            non-production environment and is subject to these Terms, Disclaimer
            and the Privacy Policy incorporated herein by reference. Use of the
            Website constitutes acceptance of these Terms, the Disclaimer and
            the Privacy Policy. Bastion reserves the right to make unlimited
            changes to the Website and its content, without prior notice to the
            User.
            <br /> <br />
            You represent and warrant that you are at least 18 years of age. If
            you are under 18 years of age, you may not use the Service.
            <br /> <br />
            Please read these Terms of Use, Disclaimer and our Privacy Policy
            carefully before using our Service. By accessing or using the
            Service, you acknowledge that you have read, understood, and agree
            to be bound by these Terms of Use, Disclaimer and our Privacy
            Policy.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            4. Restricted Activities
            <br /> <br />
            The User may not take any actions that are unlawful, offensive,
            upsetting, intended to disgust, threatening, libelous, defamatory,
            obscene, or otherwise objectionable. Examples of such objectionable
            actions include, but are not limited to, the following:
            <br /> <br />
            Unlawful actions or actions promoting unlawful activity.
            <br /> <br />
            § Actions that are defamatory, discriminatory, or mean-spirited,
            including references or commentary about religion, race, sexual
            orientation, gender, national/ethnic origin, or other targeted
            groups.
            <br /> <br />
            § Spam, machine-generated, or randomly-generated actions constitute
            unauthorized or unsolicited advertising, chain letters, any other
            form of unauthorized solicitation, or any form of lottery or
            gambling.
            <br /> <br />
            § Actions containing or installing any viruses, worms, malware,
            trojan horses, or other content that is designed or intended to
            disrupt, damage, or limit the functioning of any software, hardware,
            or telecommunications equipment or to damage or obtain unauthorized
            access to any data or other information of a third person.
            <br /> <br />
            § Actions infringing on any proprietary rights of any party,
            including patent, trademark, trade secret, copyright, right of
            publicity, or other rights.
            <br /> <br />
            § Actions impersonating any person or entity, including Bastion and
            its contributors or representatives.
            <br /> <br />
            § Actions violating the privacy of any third person.
            <br /> <br />
            § Actions involving false information and features.
            <br /> <br />
            Bastion reserves the right, but not the obligation, to, in its sole
            discretion, determine whether or not any actions are appropriate and
            comply with these Terms, refuse or remove these actions. Bastion
            further reserves the right to make formatting and edits and change
            the manner of any actions. Bastion can also limit or revoke the use
            of the Service if You take such objectionable actions. As Bastion
            cannot control all actions taken by users and/or third parties on
            the Service, you agree to use the Service at your own risk. You
            understand that by using the Service, You may be exposed to actions
            that You may find offensive, indecent, incorrect, or objectionable,
            and You agree that under no circumstances will Bastion be liable in
            any way for any actions, including any errors or omissions in any
            actions, or any loss or damage of any kind incurred as a result of
            your use of any actions.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            5. Understanding of Risk
            <br /> <br />
            By using our Service, you acknowledge and accept the following risks
            and limitations:
            <br /> <br />
            § The regulatory landscape for blockchain technologies,
            cryptocurrency, and other crypto-based items is uncertain, and
            changes in regulations or policies may adversely affect the Service.
            <br /> <br />
            § The success and development of distributed ecosystems are
            dependent on public interest and adoption. The lack of use or
            interest may negatively impact the development of ecosystems and the
            potential utility of the Network.
            <br /> <br />
            § Crypto assets are subject to market volatility and fluctuations in
            the price, which may result in loss of value. You understand and
            agree that crypto assets have a subjective value.
            <br /> <br />
            § There are risks associated with peer-to-peer transactions,
            including the risk of counterfeit items, metadata decay, smart
            contract bugs, and untransferable items. You must conduct sufficient
            research before interacting with any crypto products or services.
            <br /> <br />
            § Internet and blockchain-based products are associated with risks
            such as hardware, software, and Internet connection failures,
            malicious software, and unauthorized access to your third-party
            wallet or Avatar. We are not responsible for any communication
            failures, disruptions, errors, distortions, or delays caused by such
            risks.
            <br /> <br />
            § You are solely responsible for assessing the nature and legal
            possibilities of legal trading in cryptocurrencies under their
            applicable law. Bastion is not responsible for changing the law
            applicable to the User regarding the legality and rules of trading
            in cryptocurrencies.
            <br /> <br />
            § You are solely responsible for determining the taxes that apply to
            your transactions, and we are not responsible for any tax-related
            issues.
            <br /> <br />
            § In the event of a dispute with other users, you release us from
            any claims, demands, and damages arising from such disputes. This
            release includes those claims that you may know or suspect to exist
            in your favor at the time of agreeing to this release.
            <br /> <br />
            § We do not control the public blockchains that you use, and we have
            no ability to reverse any transactions on the blockchain.
            <br /> <br />
            The Website and Service rely on third-party Merchants, and if we are
            unable to maintain good relationships with them or comply with their
            terms and conditions, access to and use of the Service will suffer.
            <br /> <br />
            We reserve the right to hide collections, contracts, and items
            affected by any issues or by other issues. The inability to view
            items or use the Service with the purchase, sale, or transfer of
            items available on any blockchain does not serve as grounds for a
            claim against us.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            6. Intellectual Property
            <br /> <br />
            The exclusive property of Bastion and its licensors are the Website
            and its original content (excluding Content provided by users),
            features, and functionality. The Website is protected by copyright,
            trademark, and other laws of both domestic and foreign countries.
            <br /> <br />
            Any unauthorized use of our trademarks in connection with any
            product or service is strictly prohibited without the prior written
            consent of Bastion.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            7. Copyright Policy
            <br /> <br />
            We respect the intellectual property rights of others. Our policy is
            to respond to any claim that Content posted on the Website infringes
            a copyright or other intellectual property infringement of any
            person. If You are a copyright owner or authorized on behalf of one,
            and You believe that the copyrighted work has been copied in a way
            that constitutes copyright infringement that is taking place through
            the Service, You must submit Your notice in writing to the attention
            of our copyright agent via Discord on and include in Your notice a
            detailed description of the alleged infringement. You may be held
            accountable for damages (including costs and attorneys&apos; fees)
            for misrepresenting that any Content infringes Your copyright.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            8. Link to Other Websites
            <br /> <br />
            Our Website and the Service we provide may include links to
            third-party websites or services that are not owned or controlled by
            Bastion. It is important to note that Bastion does not have any
            control over the content, privacy policies, or practices of any
            third-party websites or services. As a user, you acknowledge and
            agree that Bastion shall not be held responsible or liable, directly
            or indirectly, for any damage or loss caused or alleged to be caused
            by or in connection with the use of or reliance on any content,
            goods, or services available on or through any such third-party
            websites or services. We highly recommend that you carefully review
            the terms and conditions and privacy policies of any third-party
            websites or services you access.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            9. Feedback & Errors Reporting
            <br /> <br />
            You can submit feedback to us directly through Element.io, email or
            through third-party sites and tools. The feedback can include
            errors, suggestions for improvements, ideas, problems, complaints,
            or any other matters related to our Service. You agree that the
            feedback you provide does not grant you any intellectual property
            right or other right, title, or interest. Bastion may have similar
            development ideas to the feedback you provide. You acknowledge that
            your feedback does not contain confidential or proprietary
            information from you or any third party, and Bastion is not
            obligated to keep it confidential. If the transfer of ownership to
            the feedback is not possible due to mandatory laws, you grant
            Bastion and its affiliates an exclusive, transferable, irrevocable,
            free-of-charge, sub-licensable, unlimited, and perpetual right to
            use the feedback in any way and for any purpose, including copying,
            modifying, creating derivative works, publishing, distributing, and
            commercializing it
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            10. &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
            <br /> <br />
            The Service is provided to You &quot;AS IS&quot; and &quot;AS
            AVAILABLE&quot; and with all faults and defects without warranty of
            any kind. To the maximum extent permitted under applicable law,
            Bastion, on its own behalf and on behalf of its Affiliates and its
            and their respective licensors and service providers, expressly
            disclaims all warranties, whether express, implied, statutory or
            otherwise, with respect to the Service, including all implied
            warranties of merchantability, fitness for a particular purpose,
            whether express, implied, statutory or otherwise, with respect to
            the Service, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of the course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, Bastion provides no warranty or undertaking and makes no
            representation of any kind that the Service will meet Your
            requirements, achieve any intended results, be compatible or work
            with any other software, applications, systems, or services, operate
            without interruption, meet any performance or reliability standards
            or be error-free or that any errors or defects can or will be
            corrected.
            <br /> <br />
            Without limiting the foregoing, neither Bastion nor any of the
            company&apos;s providers makes any representation or warranty of any
            kind, express or implied: (i) as to the operation or availability of
            the Service, or the information, content, and materials or products
            included thereon; (ii) that the Service will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the Service; or (iv)
            that the Service, its servers, the content, or e-mails sent from or
            on behalf of Bastion are free of viruses, scripts, trojan horses,
            worms, malware, timebombs or other harmful components.
            <br /> <br />
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. But in such a case, the exclusions and limitations
            set forth in this section shall be applied to the greatest extent
            enforceable under applicable law.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            11. Limitation of Liability
            <br /> <br />
            Bastion and its suppliers shall not be liable for any special,
            incidental, indirect, or consequential damages whatsoever, including
            but not limited to loss of profits, loss of data or other
            information, business interruption, personal injury, or loss of
            privacy arising from the use of the Service, third-party software,
            or third-party hardware used with the Service. This limitation of
            liability applies even if Bastion or any supplier has been advised
            of the possibility of such damages and even if the remedy fails of
            its essential purpose.
            <br /> <br />
            It is important to note that some states do not allow the exclusion
            of implied warranties or limitation of liability for incidental or
            consequential damages. Therefore, in such states, the above
            limitations may not apply. However, the liability of each party will
            still be limited to the greatest extent permitted by law.
            <br /> <br />
            In the event of liability found on the part of Bastion, the
            liability will be limited to the amount paid for the products and/or
            services, and there will be no consequential or punitive damages,
            except where prohibited by law. Some states may not allow the
            exclusion or limitation of punitive, incidental, or consequential
            damages, so the prior limitation or exclusion may not apply to you.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            12. Termination
            <br /> <br />
            We may terminate or suspend your account and bar access to Service
            immediately, without prior notice or liability, under our sole
            discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of Terms.
            <br /> <br />
            If you wish to terminate your account, you may simply discontinue
            using the Service.
            <br /> <br />
            All provisions of Terms that by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity,
            and limitations of liability.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            13. Indemnification
            <br /> <br />
            If we request it, you agree to protect, indemnify, and safeguard us
            and our Affiliates from any and all liabilities, claims, and
            expenses, including legal fees, that result from your use or abuse
            of this site. We have the right, at our expense, to take over the
            exclusive defense and control of any matter for which you are
            required to indemnify us. In this case, you will cooperate with us
            in raising any available defenses.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            14. Governing Law
            <br /> <br />
            These Terms will be interpreted and enforced in accordance with all
            relevant Applicable Laws without regard to any conflicting legal
            provisions.
            <br /> <br />
            If we fail to enforce any right or provision in these Terms, it will
            not be seen as a waiver of those rights. If any provision of these
            Terms is found by a court to be invalid or unenforceable, the
            remaining provisions will still apply. These Terms represent our
            full agreement concerning our Service and replace any prior
            agreements we may have had regarding the Service.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            15. Changes to Terms of Use.
            <br /> <br />
            Bastion has the right to change or update these Terms at any time
            without prior notice. Any modifications or replacements will be
            effective immediately. You are responsible for reviewing the Terms
            periodically for any changes. Your continued use of the Service
            after any modifications or replacements to the Terms indicates your
            acceptance of the updated Terms. If you do not agree with the
            changes, you must stop using the Service immediately.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            16. Waiver & Severability
            <br /> <br />
            In the event that any provision of these Terms is found to be
            unenforceable or invalid, that provision will be modified to the
            extent necessary to achieve its intended purpose to the fullest
            extent possible under applicable law, and the remaining provisions
            will remain in full force and effect. Except as explicitly provided
            in these Terms, the failure to exercise a right or require
            performance of an obligation will not limit the ability to exercise
            such right or require such performance at a later time, nor will the
            waiver of a breach constitute a waiver of any subsequent breach.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            17. Acknowledgment
            <br /> <br />
            BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
            THAT YOU HAVE READ THESE TERMS OF USE AND AGREE TO BE BOUND BY THEM.
            <br /> <br />
          </p>

          <p className='text-gray-600 text-sm'>
            18. Contact Us
            <br /> <br />
            If you have any questions about these Terms of Use, You can contact
            us via email at mvp@polity.li or element.io at:
            @politymvp:matrix.org
            <br /> <br />
          </p>

          {/* Add the rest of the agreement text here */}
          {/* ... */}
        </div>

        {/* Footer */}
        <div className=' border-t border-gray-200'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-start gap-2 px-6 my-4'>
              <input
                type='checkbox'
                id='acknowledgment'
                checked={isAcknowledged}
                onChange={(e) => setIsAcknowledged(e.target.checked)}
                className='mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500'
              />
              <label
                htmlFor='acknowledgment'
                className='text-[14px] text-gray-700 cursor-pointer'
              >
                I acknowledge that I have read and understood the above Terms of
                Use.
              </label>
            </div>
            <div className='w-full flex items-center justify-center'>
              <div className='border-t border-gray-200 flex-grow' />
            </div>
            <div className='px-6 py-4'>
              <Button
                onClick={handleAgree}
                className='w-full'
                disabled={!isAcknowledged}
              >
                Agree & Continue
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
