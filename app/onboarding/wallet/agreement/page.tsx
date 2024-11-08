'use client';

import OnboardingBlock from '@/components/onboardingblock';
import { File02 } from '@untitled-ui/icons-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useWalletSelection } from '@/app/contexts/WalletSelectionContext';

export default function Agreement() {
  const { selectedProvider } = useWalletSelection();

  const title = selectedProvider
    ? `Virtual Currency Wallet Agreement - ${selectedProvider.name}`
    : 'Virtual Currency Wallet Agreement';

  return (
    <OnboardingBlock
      icon={<File02 className='w-8 h-8 text-gray-700' />}
      title={title}
      description='Agree to the terms to complete the set up of your wallet.'
    >
      <div className='max-h-[70vh] px-6 py-2 text-sm pb-32 overflow-y-scroll'>
        {/* Agreement text content */}
        VIRTUAL CURRENCY WALLET AGREEMENT - DFNS
        <br />
        <br />
        THIS VIRTUAL CURRENCY WALLET AGREEMENT (“WALLET AGREEMENT”) IS A LEGAL
        AND BINDING AGREEMENT BETWEEN YOU (“USER”) AND BASTION GENOSSENSCHAFT
        (IN ENGLISH – BASTION COOPERATIVE), INCORPORATED AND EXISTING UNDER THE
        LAWS OF THE PRINCIPALITY OF LIECHTENSTEIN, AND HAVING ITS REGISTERED
        OFFICE AT SCHAANERSTRASSE 27, VADUZ 9490, PRINCIPALITY OF LIECHTENSTEIN
        (“BASTION”, “DISTRIBUTOR”).
        <br />
        <br />
        USE OF SOFTWARE AND PRODUCTS, INCLUDING WITHOUT LIMITATION ALL
        ASSOCIATED DOCUMENTATION, IS SUBJECT TO THE TERMS AND CONDITIONS. BY
        CLICKING “I ACCEPT,” DOWNLOADING OR INSTALLING THE SOFTWARE, OR
        OTHERWISE SIGNIFYING ACCEPTANCE OF THIS WALLET AGREEMENT, THE USER
        AGREES TO ALL TERMS AND CONDITIONS HEREIN.
        <br />
        <br />
        <br />
        <br />
        General
        <br />
        <br />
        1.1. In this Wallet Agreement Bastion and the User are collectively
        referred to as the “Parties” and each individually as a “Party”.
        <br />
        <br />
        1.2. This Wallet Agreement regulates the provision by the Distributor to
        the User of the third-party software, specifically the creation,
        provision to the User and maintenance of a virtual currency wallet
        (“VCW”) enabled by Dfns, a société par actions simplifiée incorporated
        under the laws of France, whose registered office is at 198, avenue de
        France, 75013 Paris (France), registered with the Trade and Companies
        Register of Paris under number 888 176 575 (“Merchant”) – “Service”.
        <br />
        <br />
        1.3. In providing the Service to the User under this Wallet Agreement
        Bastion acts on the basis of a Software as a Service Agreement of 12
        October 2022 between Bastion and the Merchant.
        <br />
        <br />
        1.4. This Wallet Agreement is subject to acceptance by the User of the
        Terms of Use (“Terms”) and shall be read, understood and interpreted in
        conjunction with the Terms incorporated herein by reference.
        <br />
        <br />
        1.5. Bastion reserves the right to revise this Wallet Agreement from
        time to time at its sole discretion, with any changes made available on
        Bastion website and/or mobile application. Bastion may will also notify
        the User of such changes via push notifications through the App. The
        changes shall take effect from the date of publication of the new terms
        or such other date stated in the notice, and your continued access or
        use of the Services from such date shall be deemed to constitute
        acceptance of the new terms in their entirety. It shall be the User’s
        sole responsibility to check Bastion website for such changes from time
        to time.
        <br />
        <br />
        <br />
        <br />
        2. Definitions
        <br />
        <br />
        For the purposes of this Wallet Agreement, the following terms shall
        have the following meaning:
        <br />
        <br />
        “App” means Polity Private MVP application.
        <br />
        <br />
        “User Account” means an account used to record the User’s email,
        username, password, 2-factor verification code, unique identity
        information of the mobile application, joined groups, the accessible
        networks, and the User’s personal files and settings. User Account will
        record any on-chain information about the User&apos;s transactions, and
        be the only account to login and use the VCW.
        <br />
        <br />
        “Virtual Currency Wallet” or “VCW” means a software program to securely
        store, [manage, receive, and send] digital assets, including web console
        and mobile applications, in a distributed and “keyless” manner.
        <br />
        <br />
        “Indemnified Parties” has the meaning given in Clause 6.1.
        <br />
        <br />
        “Initial Duration” has the meaning given in Clause 9.1.
        <br />
        <br />
        “Privacy Policy” means Bastion’s Privacy Policy which we may amend from
        time to time by Bastion.
        <br />
        <br />
        “Quarter” means a period of three (3) calendar months.
        <br />
        <br />
        “Recipient” has the meaning given in Clause 8.1.
        <br />
        <br />
        “Renewal Duration” has the meaning given in Clause 9.1.
        <br />
        <br />
        “Service Credit” is a dollar credit, calculated in the manner set forth
        in Clause 6.2 that we may credit to your Account.
        <br />
        <br />
        “Services” means the service(s) provided by Bastion and/or the Merchant
        to the User via the App or any other website notified to you from time
        to time.
        <br />
        <br />
        “Signer” means an individual Docker Container responsible for operating
        a given key-share, and communicating with other Signers to create
        signatures.
        <br />
        <br />
        “Software” means any software or application developed and released by
        the Merchant as part of the Services.
        <br />
        <br />
        “Subscription Fee” means the [monthly], [annual], [lifetime]
        subscription fee of [nil] [ ] [ ] [ ] payable by you to Bastion for the
        use of VCW.
        <br />
        <br />
        “Supported Digital Assets” means any digital asset which is a digital
        representation of value based on (or built on top of) a cryptographic
        protocol of a computer network which has been approved by and/or
        supported by both Bastion and the Merchant for use in connection with
        the Services from time to time. Please refer to for the list at
        https://www.dfns.co/assets.
        <br />
        <br />
        “User Data” means the data inputted by you, the Authorised Users, or the
        Merchant on your behalf for the purpose of using the Services, or
        facilitating your use of the Services, other than personal data.
        <br />
        <br />
        “Virus” means a thing or device (including any software, code, file or
        programme) which may: prevent, impair or otherwise adversely affect the
        operation of any computer software, hardware or network, any
        telecommunications service, equipment or network or any other service or
        device; prevent, impair or otherwise adversely affect access to or the
        operation of any programme or data, including the reliability of any
        programme or data (whether by re-arranging, altering or erasing the
        programme or data in whole or part or otherwise); or adversely affect
        the user experience, including worms, trojan horses, viruses and other
        similar things or devices.
        <br />
        <br />
        “Vulnerability” means a weakness in the computational logic (for
        example, code) found in software and hardware components that when
        exploited, results in a negative impact to the confidentiality,
        integrity, or availability of the Services, and the term
        “Vulnerabilities” shall be interpreted accordingly.
        <br />
        <br />
        “Wallet” means a combination of private and public keys.
        <br />
        <br />
        <br />
        <br />
        2. The Services
        <br />
        <br />
        2.1. Bastion shall, during the Term provide the Services described in
        Clauses 2.2 and 2.3 to the User. The provision of the Services is
        subject to prior:
        <br />
        <br />
        · acceptance by the User of the Terms, Disclaimer and Privacy Policy;
        <br />
        <br />
        · onboarding of the User, i.e., whitelisting, creation by the User of at
        least one Avatar and creation of a virtual node for that Avatar;
        <br />
        <br />
        · Selection by the User of one a Subscription Plan;
        <br />
        <br />
        · acceptance by the User of this Wallet Agreement.
        <br />
        <br />
        <br />
        <br />
        2.2. Generation of the key-shares
        <br />
        <br />
        The Merchant’s algorithm enables the User to generate a combination of
        public and private keys (the “Wallet”) through the API.
        <br />
        <br />
        2.2.1. The private key is generated by the User, via the API, as a
        collection of key-shares (“Distributed Secret Key Shares”). Each part of
        the Distributed Secret Key Shares is assigned to a host (“Signer”). For
        security purposes, Signers are distributed among different Data Centers
        located across several geographic regions.
        <br />
        <br />
        Each User has access to a unique collection of Signers (“Signing
        Group”), composed of Signers and assigned with a threshold of
        key-shares, which represent the minimum number of key-shares needed to
        sign a transaction via Multi-Party Computation (MPC). For additional
        security purposes, the number of Signers equals twice the number of
        key-shares for the threshold, plus one. The distributed key generation
        process is initiated by the User via API call.
        <br />
        <br />
        2.2.2. The User may via API through the Merchants’ policy engine define
        the Authorized Person(s) who will have the authority to configure the
        API and under which conditions.
        <br />
        <br />
        2.2.3. When an Authorized Person, wants to perform an activity on a
        blockchain, such Authorized Person shall use his/her user confidential
        credentials to access the API key and process the chosen activity.
        <br />
        <br />
        The User hereby agrees and accepts full responsibility for all use that
        occurs under the User account and any credentials, passwords, keys,
        tokens, including any activities conducted by the User or any third
        parties that have access to the User’s account information whether
        authorized or not.
        <br />
        <br />
        If the User believes an unauthorized person has gained access to his/her
        account, or any credentials, passwords, keys, tokens, the User must
        immediately notify the Merchant at: care@dfns.co.
        <br />
        <br />
        The User hereby accepts and acknowledges that both the private keys and
        the private key-shares will never be revealed to anyone, including
        Bastion and/or the Merchant or any of the Users Authorized Persons, the
        private key-shares will remain “embedded” within the Solution, i.e.
        stored and encrypted within each of the different Signers. However, the
        public key and addresses derived from the private keys will be
        communicated to the User by the API.
        <br />
        <br />
        The User hereby acknowledges and accepts being solely responsible for
        any consequences, losses, expenses, costs, and claims that may result
        from any incorrect, neglected and unauthorized use of the private Key
        Shares.
        <br />
        <br />
        Neither Bastion nor the Merchant shall assume responsibility for any
        loss or damage that may be incurred by the User due to the failed
        recovery of the wallet or User not recording the Key Share, loss of
        data, erroneous transmission of cryptocurrency, and hacking by third
        parties.
        <br />
        <br />
        The User hereby accepts to implement appropriate technical,
        organizational and security measures to make sure that the User
        credentials are stored safely.
        <br />
        <br />
        <br />
        <br />
        2.3. Wallet Management Services:
        <br />
        <br />
        2.3.1 Bastion will provide the User with a user interface accessible
        through the User’s Account to enable the User to manage the digital
        wallet. The User may only carry out transactions from the Account once
        the Distributed Secret Key Shares have been generated. Through the user
        interface, the User may interact with the relevant supported blockchain
        and enjoy the following functions:
        <br />
        <br />
        2.3.1.1. Receiving assets: Use the App to generate a QR code as well as
        a blockchain address to receive Supported Digital Assets.
        <br />
        <br />
        Given the risk that the address may be tampered with or replaced during
        transmission, Bastion recommends to confirm the receiving blockchain
        address with the sender after the sender has received it.
        <br />
        <br />
        2.3.1.2. Address whitelist: Save recipient blockchain addresses on the
        App through the “whitelist” function.
        <br />
        <br />
        If there is more than one person operating the Account, Bastion
        recommends that at least two Authorised Persons with the “administrator”
        role check and verify that the whitelist address is accurate.
        <br />
        <br />
        2.3.1.3. Sending assets: Transfer Supported Digital Assets out of the
        linked digital asset wallet through the User interface to external
        recipients.
        <br />
        <br />
        The User may transfer its digital assets, from the Wallets generated
        using the Solution, to an external legitimate address by using the
        following process:
        <br />
        <br />
        a) The User authenticates through Multiple Factor Authorization (“MFA”)
        to the Merchant’s dashboard to obtain an API authorization token.
        <br />
        <br />
        b) The User initiates a transfer request on behalf of the user
        interface, via the API, using its authorization token or confidential
        API key.
        <br />
        <br />
        c) A message is sent automatically to the Signers.
        <br />
        <br />
        d) The Signing Group creates a signature for the message and the Service
        automatically completes the activity corresponding to the User’s initial
        request.
        <br />
        <br />
        Please ensure that there are sufficient funds for the transfer,
        including any transaction or network fees which may be incurred. These
        transaction fees are set by the third party blockchains and networks and
        neither Bastion nor the Merchant have control or influence over such
        fees. Bastion does not charge any fees for such transfers.
        <br />
        <br />
        2.3.1.4 Transaction record: Record the status of the transactions or the
        recent transaction history.
        <br />
        <br />
        This information may be downloaded or exported as a MS Excel sheet.
        <br />
        <br />
        2.3.1.5 Policy engine: Customize and set the approval policies for
        transactions which may be carried out through the Account.
        <br />
        <br />
        The User may configure triggering conditions based on up to five (5)
        dimensions (initiator, asset source, destination, asset type and
        amount). Specific member roles may be assigned and set. Once set,
        Authorised Users with the requisite permissions may modify the policies
        with the approval of Authorised Users with the “administrator” role.
        <br />
        <br />
        For the avoidance of doubt, neither Bastion nor the Merchant will be
        able to make any changes to the User’s approval policies.
        <br />
        <br />
        The User can access and retrieve these records at any time.
        <br />
        <br />
        <br />
        <br />
        2.4. Unsupported Digital Assets
        <br />
        <br />
        Under no circumstances should the User attempt to use the Services
        stated herein to store, send, request, or receive any assets other than
        Supported Digital Assets (for more information, please visit the
        Merchants’ supported tokens list: https://www.dfns.co/assets).
        <br />
        <br />
        Neither Bastion nor the Merchant assume responsibility in connection
        with any attempt by the User to use Digital Assets that the Merchant
        does not support.
        <br />
        <br />
        The User hereby acknowledges and agrees that Bastion and/or the Merchant
        are not liable for any unsupported Digital Asset that is sent to the
        User Wallet.
        <br />
        <br />
        The User agrees that the Merchant may in its sole discretion terminate
        support or add support for any particular Digital Asset, it is the
        User’s responsibility to check the supported assets before taking any
        action on the wallet. Neither Bastion nor the Merchant incur obligation
        whatsoever with regard to unsupported Digital Assets sent to the User
        Account or with regard to Supported Digital Asset sent to an
        incompatible wallet address.
        <br />
        <br />
        The User hereby acknowledges and agrees that all erroneously transmitted
        Digital Assets will be lost and that he/she may be required to pay
        network or miner’s fees in order for an Inbound Transfer transaction to
        be successful. Insufficient network fees may cause an Inbound Transfer
        to remain in a “pending state” outside of the Merchant’s control. The
        User agrees to release Bastion and or the Merchant of responsibility and
        liability for delays or any loss incurred as a result of an error in the
        initiation of the transaction. In such cases, the parties agree that
        neither Bastion nor the Merchant have an obligation to assist in the
        remediation of such transactions.
        <br />
        <br />
        <br />
        <br />
        2.5. Wallet Services’ Limitations
        <br />
        <br />
        2.5.1. The Service may be subject to limitations on the number of API
        calls per minute. If the User wishes to exceed such limitations, the
        User may request an increase via email at care@dfns.co. The Merchant may
        approve (subject to additional fees) or reject any such request at its
        sole discretion. If the User attempts to exceed the limitation without
        prior approval from the Merchant, the later may suspend or throttle the
        User’s excess use and the User shall be subject to applicable charges
        for any excess usage.
        <br />
        <br />
        2.5.2. The Merchant only supports, and the User may only use the Service
        in connection with, the protocols/tokens/transactions that are listed
        at: www.dfns.co/assets (“Supported Tokens”). The list of Supported
        Tokens may change at the sole discretion of the Merchant. Accordingly,
        the User shall not attempt to receive, request, send, store, or engage
        in any other type of transaction involving any protocol, token or
        transaction other than a Supported Token. Neither Bastion nor the
        Merchant will have responsibility or liability if the User loses, burns,
        or otherwise cannot access or control any token that the Merchant does
        not support.
        <br />
        <br />
        <br />
        <br />
        2.6. Software and App Updates
        <br />
        <br />
        2.5.1 Bastion and/or the Merchant may from time to time provide updates
        and upgrades to Software. Such updates and upgrades (if any), and their
        frequency, will be determined and implemented at Bastion’s and/or the
        Merchant’s sole discretion. The responsibility for ensuring that the
        latest version of the Software is installed on the User’s device(s)
        rests with the User. Any use of outdated versions of the Software or
        incompatible devices will be at the User’s sole risk and without
        prejudice to the generality of Clause 8.
        <br />
        <br />
        2.5.2. If the blockchain of a Supported Digital Asset forks, Bastion
        and/or the Merchant may temporarily suspend the use of the Services in
        relation to such affected digital asset. Bastion and the Merchant
        reserve the absolute discretion to determine whether or not to support
        the forked protocol. In any event, the User may opt to transfer the
        affected digital asset out of the digital wallet.
        <br />
        <br />
        <br />
        <br />
        2.6. Disaster recovery
        <br />
        <br />
        As long as each Signing Group gathers a number of Signers equal to or
        greater than the threshold, the User can perform an activity without
        having to trigger the disaster recovery plan.
        <br />
        <br />
        However, if either:
        <br />
        <br />
        · the Service is unable to use one or several Key Shares to sign a
        transaction; or
        <br />
        <br />
        · one or several Authorized Persons forget the password, or any
        information required to approve a transaction for any other reason; and
        the number of remaining usable Key Shares is lower than the threshold of
        key-shares needed to create a signature (i.e. performing an activity has
        become materially impossible), then the Merchant’s Disaster Recovery
        Plan shall be executed.
        <br />
        <br />
        The Merchant’s Disaster Recovery Plan is available for reference at:
        https://www.dfns.co/faq-chapters/security.
        <br />
        <br />
        <br />
        <br />
        Warranties
        <br />
        <br />
        3.1. Bastion’s Warranties:
        <br />
        <br />
        3.1.1 Bastion warrants that the Services will be performed substantially
        in accordance with the Documentation and with reasonable care. This
        undertaking shall not apply in case of any non-conformance caused by use
        of the Services contrary to the instructions, or modification or
        alteration of the APIs or Software by any party other than Bastion or
        the Merchant or the duly authorised contractors or agents. If the
        Services do not conform with the foregoing undertaking, Bastion will, at
        its own expense, use commercially reasonable endeavours to correct any
        such non-conformance promptly, or provide the User with an alternative
        means of accomplishing the desired performance.
        <br />
        <br />
        3.1.2 Bastion represents and warrants that it, or its Merchant,
        contractors and agents shall use commercially reasonable efforts to
        provide the Services without introducing errors.
        <br />
        <br />
        3.1.3 Save as expressly set out in this Clause 3, Bastion makes no other
        warranties in respect of the Services, Software and/or the
        Documentation.
        <br />
        <br />
        <br />
        <br />
        3.2 Bastion’s Warranty Disclaimer:
        <br />
        <br />
        3.2.1 To the maximum extent permitted under applicable laws, and except
        as expressly provided in this Wallet Agreement, Bastion makes no
        warranties of any kind, express or implied, regarding the Services and
        the Software and disclaims to the full extent permitted by law all
        warranties of merchantability, fitness for a particular purpose, and any
        warranties arising out of the course of dealing between the Parties.
        <br />
        <br />
        3.2.2 The User hereby agrees that the Services and the Software are
        provided on an “as is” and “as available” basis without warranty of any
        kind.
        <br />
        <br />
        3.2.3 Bastion makes no warranties or representations regarding the use
        of the Software and the App with third party products or services,
        including, for the avoidance of doubt, Web3 applications.
        <br />
        <br />
        3.2.4 Bastion does not warrant that:
        <br />
        <br />
        · the use of the Services will be uninterrupted or error-free;
        <br />
        <br />
        · the Services, Documentation and/or the information obtained by the
        User through the Services will meet the User’s requirements; or
        <br />
        <br />
        · the Software or the Services will be free from Vulnerabilities or
        Viruses.
        <br />
        <br />
        <br />
        <br />
        3.3. Trade Sanctions, AML, CFT Compliance
        <br />
        <br />
        3.3.1. The User hereby agrees to use the Services listed in this Wallet
        Agreement in compliance with all applicable trade sanctions laws, export
        control laws, AML and CFT rules and regulations, including without
        limitation the regulations administered by the U.S. Department of the
        Treasury’s Office of Foreign Assets Control (“OFAC”), and the U.S.
        Department of Commerce’s Bureau of Industry and Security (“BIS”).
        <br />
        <br />
        The User represents and warrant that:
        <br />
        <br />
        (i) the User is not a citizen of, or located within, a country or
        territory that is subject to comprehensive trade restrictions (including
        without limitation U.S trade sanctions, Russia, Crimea, Cuba, Iran,
        North Korea, and Syria);
        <br />
        <br />
        (ii) the User is not a Politically exposed person (PEP),
        <br />
        <br />
        (iii) the User is not identified on any government restricted party
        lists (including without limitation the Specially Designated Nationals
        and Blocked Persons List, Foreign Sanctions Evaders List, and Sectoral
        Sanctions Identifications List, administered by OFAC, and the Denied
        Party List, Entity List and Unverified List, administered by BIS); and
        <br />
        <br />
        (iv) that no content created or submitted by the User, or the User’s
        Authorised Persons, is subject to any restriction on disclosure,
        transfer, download, export or re-export under the Export Control Laws.
        <br />
        <br />
        The User hereby agrees not to use the Service to disclose, transfer,
        download, export or re-export, directly or indirectly, any content to
        any country, entity or other party which is ineligible to receive such
        items under the Export Control Laws or under other laws or regulations
        to which the User may be subject.
        <br />
        <br />
        The User acknowledges that the Service may not be available in all
        jurisdictions and that the User is solely responsible for
        <br />
        <br />
        (i) complying with Anti money laundering and Counter Finance Terrorism
        Laws, the Export Control Laws and
        <br />
        <br />
        (ii) monitoring them for any modifications.
        <br />
        <br />
        <br />
        <br />
        3.4. The User’s Warranties and Representations:
        <br />
        <br />
        3.4.1 The User has the full and sufficient legal capacity and authority
        to enter into and be bound by this Wallet Agreement and the person
        executing or otherwise accepting this Wallet Agreement on the User’s
        behalf has full legal capacity and authorization to do so.
        <br />
        <br />
        3.4.2 If the User is a corporate entity, the User duly organized,
        validly existing and in good standing under the laws of the jurisdiction
        in which it is organized.
        <br />
        <br />
        3.4.3 No petition has been presented, no proceeding has been commenced,
        no order has been made, and no resolution has been passed for the User’s
        bankruptcy (if the User is an individual), or for the appointment of an,
        administrator, trustee or similar officer of it or of all or a
        substantial part of its business or assets (if the User is an entity).
        <br />
        <br />
        3.4.4. If the User is a corporate entity, the User will ensure that its
        directors, employees, representatives, agents, affiliates and/or
        contractors (including for the avoidance of doubt, Authorised Users) do
        comply with this Wallet Agreement.
        <br />
        <br />
        3.4.5. All information provided by the User to Bastion in the course of
        onboarding and the use of the Services is complete, true, and accurate
        in all material respects, including, where the User is a corporate
        entity, no material information about the ownership and control over the
        User and its operations has been excluded; and no other person or entity
        has an ownership interest in the User except for those disclosed in
        connection with such onboarding.
        <br />
        <br />
        3.4.6. The User represents and warrants to Bastion that activities that
        the User carries out through its Account comply with all applicable laws
        and regulations, including but not limited to anti-bribery,
        anti-corruption, anti-fraud, anti-money laundering or anti-terrorism
        laws and regulations.
        <br />
        <br />
        3.4.7. The User further represents and warrants to Bastion that we will
        be immediately notified of any Vulnerabilities found in the Services,
        Accounts, Apps or Software. The User shall, and shall procure that its
        representatives, agents and subcontractors cooperate with Bastion in
        good faith during Bastion’s investigations of any illegal operations and
        any Vulnerabilities.
        <br />
        <br />
        3.4.8. The User shall maintain adequate security and control over any
        and all its private keys, the mnemonic phrases, registered email
        account(s), passwords, API keys, 2-factor authentication devices or
        backups, or any other codes that the User uses to access the Services.
        Any loss or compromise of the foregoing information and/or the User’s
        personal information may result in unauthorized access to the User’s
        Account by third parties and the loss or theft of digital assets from
        the digital wallet. The User is responsible for keeping its registered
        email address(es) up to date in the Account profile in order to receive
        any notices or alerts that Bastion may send. The User is responsible for
        ensuring that the generated mnemonic phrases are stored securely offline
        by each Authorised User who is permitted access and/or control over
        them.
        <br />
        <br />
        3.4.9. The User shall ensure that the destination blockchain address is
        accurate before effecting any transfers from the User’s Account.
        <br />
        <br />
        3.4.10. The User shall only receive or transfer Supported Digital Assets
        to the Account. The Supported Digital Assets are listed and displayed in
        the App.
        <br />
        <br />
        3.4.11. The User shall not receive or send any digital asset types which
        do not support the Merchant’s signature algorithm before receiving the
        written approval.
        <br />
        <br />
        <br />
        <br />
        4. Intellectual Property Rights
        <br />
        <br />
        4.1. Intellectual Property:
        <br />
        <br />
        4.1.1. The User acknowledges and agree that Bastion and/or the Merchant
        own all right, title, and interest in and to the Services, Software,
        Documentation, and all related technology and intellectual property
        rights. No other entity is entitled to grant or procure the grant of the
        limited license set out in this Wallet Agreement. Except as expressly
        provided herein, the User obtains no other rights under this Wallet
        Agreement in respect of the Services and Documentation including any
        related intellectual property rights.
        <br />
        <br />
        4.1.2. The User agrees not to, and shall procure that its Authorised
        Users, employees, directors, contractors or any other affiliate do not
        reverse engineer, decompile, disassemble, modify, update, create
        derivative works of, or otherwise tamper with Software or enable, assist
        or cause any third party to do so. The User agrees to and shall procure
        that its Authorised Users, employees, directors, contractors and any
        other affiliate keep the intellectual property in the Software
        confidential and not transfer, broadcast, publish, rent, license, or
        otherwise disclose it to any third party.
        <br />
        <br />
        4.1.3. The User shall not remove or alter any copyright, trademark or
        other proprietary rights notices from any Software or Documentation.
        <br />
        <br />
        4.1.4. The User shall not use any of Bastion’s or the Merchant’s
        trademarks, service marks, or trade names without the prior written
        consent of Bastion.
        <br />
        <br />
        4.1.5. The User shall not use the Services in any manner that could
        damage, disable, overburden, or impair any Bastion or Merchant server,
        or the networks connected to any Bastion or Merchant server, or
        interfere with any other party’s use of the Services.
        <br />
        <br />
        4.1.6. The User shall not attempt to gain unauthorized access to the
        Services, other accounts, computer systems or networks connected to any
        Bastion or Merchant server or to any of the Services, through hacking,
        password mining or any other means.
        <br />
        <br />
        4.1.7. The User shall not obtain or attempt to obtain any materials or
        information through any means not intentionally made available through
        the Services.
        <br />
        <br />
        4.1.8. The User shall not use the Services for any illegal or
        unauthorized purpose, and the User shall not, in the use of the
        Services, violate any laws in the User’s jurisdiction (including but not
        limited to copyright laws).
        <br />
        <br />
        <br />
        <br />
        5. Risks
        <br />
        <br />
        5.1. The User acknowledges that the use of the Services, Software and/or
        Documentation involves various risks, including but not limited to the
        risks set out in this Clause 5. Prior to entering into this Wallet
        Agreement, the User acknowledges that it have been warned of the risks
        associated with the use of the Services, Software and/or Documentation
        and agree that subject always to Clause 8, Bastion is not responsible,
        and assumes no liability for the following risks:
        <br />
        <br />
        5.1.1. Price Fluctuation - losses may occur due to changes in
        macroeconomic policies, laws and regulations in any jurisdiction which
        result in changes in the value of the digital assets held by the User.
        <br />
        <br />
        5.1.2. Unconfirmed Digital Assets Transfer - the blockchain network of
        the digital asset the User wishes to transfer may be suffering from any
        delays or malfunction which result in the failure to confirm any
        transfer of such digital assets.
        <br />
        <br />
        5.1.3. Risk of Transfer to Wrong Blockchain Address - erroneously
        inputting the wrong destination blockchain address may which result in
        the irreversible loss of digital assets.
        <br />
        <br />
        5.1.4. Risk of Loss or Theft of Offline Mnemonic Phrase - the mnemonic
        phrase associated with the User Key Shard may be lost or stolen by
        nefarious hackers which may result in the User losing access to the
        digital assets stored at such associated blockchain addresses.
        <br />
        <br />
        5.1.5. Risk of Security Weaknesses in the Blockchain Network and
        Protocol - the software or infrastructure underlying the blockchain
        network, digital assets or protocol may unintentionally include
        weaknesses or bugs in the source code interfering with the use of or
        causing the loss of digital assets. As Bastion cannot influence the
        overall security of any network or blockchain protocols which the User
        interacts with, Bastion does not assume any responsibility for any risks
        associated with such blockchain networks and protocols, and cannot
        guarantee its function, security and availability.
        <br />
        <br />
        5.1.6. Non-App Transfers - as transfers of digital assets can be made
        without the use of the Services through the User’s original private key,
        if the User transfers digital assets from its digital wallet, such
        transfers will not be protected by the Merchant’s multi-party security
        processes and there is a higher risk that the digital assets being
        transferred may be stolen or transferred to the wrong wallet address.
        <br />
        <br />
        5.1.7. Risk of Service Disruptions - disruptions to the use of the
        Services, may prevent the User from, inter alia, successfully utilising
        or interacting with time restricted functions which Web3 protocols and
        decentralized finance applications may have. Bastion does not assume any
        responsibility for any risks associated with disruptions to the Services
        and the User’s sole and only recourse for such disruptions to Services
        are set out in Clause 2 above.
        <br />
        <br />
        5.2. The User also acknowledges that the use of digital assets and
        blockchain based solutions, networks and blockchain protocols may
        involve serious risks. Any reminders Bastion gives to the User of the
        above risks shall not be taken as an admission or assumption of
        responsibility to issue further reminders of similar nature or of any
        other risks.
        <br />
        <br />
        <br />
        <br />
        6. Indemnification
        <br />
        <br />
        6.1. The User shall indemnify and hold harmless Bastion, its affiliates,
        Merchants and service providers, and each of its or their respective
        officers, directors, agents, employees, and representatives
        (collectively the “Indemnified Parties”), from and against any
        liabilities, damages, losses, costs and expenses, including but not
        limited to reasonable legal fees and costs and any fines, fees or
        penalties imposed by any regulatory authority, arising out of or
        incurred in connection with any third party claim, demand, action or
        proceeding (a “Claim”) arising out of or related to:
        <br />
        <br />
        (a) the User’s access or use of the Services and/or Documentation;
        <br />
        <br />
        (b) the User’s breach of this Wallet Agreement;
        <br />
        <br />
        (c) any material breach or inaccuracy of any of the User’s
        representations, warranties or covenants in this Wallet Agreement;
        <br />
        <br />
        (d) the User’s failure to provide true and accurate information in
        connection with the onboarding process or any failure to promptly update
        such information;
        <br />
        <br />
        or (e) the User’s violation of any applicable laws, or the rights of any
        third party, except where such Claim arises from the gross negligence,
        fraud or willful misconduct of Bastion and/or its affiliates, and
        provided always that the User given reasonable notice of such Claim. Any
        liabilities, damages, losses, costs and expenses, fines, fees or
        penalties shall be paid to the Indemnified Parties on demand.
        <br />
        <br />
        <br />
        <br />
        7. Limitation of Liability
        <br />
        <br />
        PLEASE READ THIS SECTION CAREFULLY AS IT COVERS THE LIMITATIONS OF
        BASTION’S LIABILITY.
        <br />
        <br />
        7.1. To the fullest extent permitted by applicable law and subject
        always to Clause 7.3:
        <br />
        <br />
        7.1.1. in no event shall Bastion, and/or any of its affiliates be liable
        for any indirect, special, incidental, consequential or exemplary
        damages of any kind (including, but not limited to, where related to
        loss of revenue, income or profits, loss of use or data, or damages for
        business interruption) arising out of or in any way related to the
        provision or use of the Services, or otherwise related to this Wallet
        Agreement, regardless of the form of action, whether based in contract,
        tort (including, but not limited to, simple negligence, whether active,
        passive or imputed), or any other legal or equitable theory (even if
        Bastion has been advised of the possibility of such damages and
        regardless of whether such damages were foreseeable); and
        <br />
        <br />
        7.1.2. in no event will Bastion’s liability and that of our affiliates,
        suppliers and contractors, in aggregate, arising from or relating to the
        Services and this Wallet Agreement exceed the greater of:
        <br />
        <br />
        (a) the amount the User paid for the Services during the 12-month period
        immediately preceding the incident giving rise to that liability; and
        (b) two hundred United States dollars (US$200.00).
        <br />
        <br />
        7.2. Without prejudice to the generality of Clause 7.1. above, you agree
        that:
        <br />
        <br />
        7.2.1. Bastion shall not bear any liability, whatsoever, for any damage,
        losses or interruptions caused by any Viruses, spyware, scareware,
        Trojan horses, worms or other malware that may affect the User’s devices
        or other equipment, or any phishing, spoofing or other attack, unless
        such damage or interruption directly resulted from our gross negligence,
        fraud, or willful misconduct;
        <br />
        <br />
        7.2.2. Bastion shall not be liable for any loss that the User may
        sustain due to compromise of login credentials, loss of mnemonic
        phrases, and/or failure to follow or act on any notices or alerts that
        we may send to the User;
        <br />
        <br />
        7.2.3. Bastion shall not be liable for any losses or liabilities arising
        from the input of wrong destination or recipient blockchain addresses;
        and
        <br />
        <br />
        7.2.4. Bastion shall not be liable for any losses or liabilities arising
        from or relating to a breach of the User’s own obligations set out in
        this Wallet Agreement.
        <br />
        <br />
        7.3. The limitations set forth in this Clause 7 will not limit or
        exclude liability for the gross negligence, fraud or intentional or
        willful misconduct of Bastion or its affiliates.
        <br />
        <br />
        <br />
        <br />
        Confidentiality
        <br />
        <br />
        8.1. As used in this Wallet Agreement, “Confidential Information” means
        any information and data of any kind that a disclosing Party
        (“Discloser”) designates as being confidential or which, under the
        circumstances surrounding disclosure, ought to be treated as
        confidential whether disclosed before, on or after the date of the
        latest version of this Wallet Agreement by the Discloser or any of its
        representatives, to the receiving Party (“Recipient”) or any of its
        representatives, and includes without limitation, technology,
        information and/or personal data provided by the Discloser, its related
        corporations, affiliates, representatives, employees, agents,
        representatives, independent contractors, advisors or consultants,
        whether disclosed or communicated verbally, in writing, or in any other
        tangible form, and whether relating to the Discloser’s business,
        operations, processes, plans, strategies, requirements, inventions,
        product or service information, pricing, know-how, design rights, trade
        secrets, software, systems, negotiations, discussions, and contracts
        with other companies, customers, the existence, nature, status and
        content of discussions or negotiations between the parties, including
        any termination of those discussions or negotiations, any copy, report,
        forecast, valuation, analysis, compilation, study, memorandum, note or
        other document or material prepared by or for the Recipient or any of
        its representatives that contains or reflects or is otherwise based upon
        (whether in whole or in part) any of the information described herein.
        including, without limitation information relating to the Discloser’s
        business operations or business relationships, financial information,
        transaction records, fee arrangements, transactions, accounts, personal
        data, pricing information, business plans, customer lists, data,
        records, reports, trade secrets, software, formulas, inventions,
        techniques, strategies and any data or information designated as
        confidential by the Discloser or which would be understood by a
        reasonable person as being of a confidential nature.
        <br />
        <br />
        8.2 A Recipient will not disclose any Confidential Information to any
        third party without the prior written consent of the Discloser, except
        as provided to such third party’s officers, directors, agents,
        employees, consultants, contractors and professional advisors who need
        to know the Confidential Information for the purposes of performance of
        this Wallet Agreement and who are informed of, and who agree to be or
        are otherwise bound by obligations of confidentiality no less
        restrictive than, the obligations set forth herein. The Recipient will
        protect such Confidential Information from any unauthorized access, use
        and disclosure and shall exercise in relation to such Confidential
        Information no lesser security and control measures and degree of care
        than those which the Recipient applies to its own Confidential
        Information. The Recipient shall not use the Discloser’s Confidential
        Information for any purpose other than to perform its obligations or
        exercise its rights under this Wallet Agreement. The obligations herein
        shall not apply to:
        <br />
        <br />
        · any information that is or becomes generally publicly available
        through no fault of the Recipient;
        <br />
        <br />
        · any information that the Recipient obtains from a third party (other
        than in connection with this Wallet Agreement) that, to the Recipient&apos;s
        best knowledge, is not bound by a confidentiality agreement prohibiting
        such disclosure; and
        <br />
        <br />
        · any information that is independently developed or acquired by the
        Recipient without the use of or reference to Confidential Information of
        Discloser.
        <br />
        <br />
        8.3 Confidential Information includes all documents and other tangible
        objects containing or representing Confidential Information and all
        copies or extracts thereof or notes derived therefrom that are in the
        possession or control of the Recipient and all of the foregoing shall be
        and remain the property of the Discloser. At the Discloser’s request,
        the Recipient shall return or destroy all Confidential Information;
        provided, however, the Recipient may retain one copy of Confidential
        Information:
        <br />
        <br />
        8.3.1 if required by applicable laws; or
        <br />
        <br />
        8.3.2 pursuant to a bona fide and consistently applied document
        retention policy; provided, further, that in either case, any
        Confidential Information so retained by the Recipient shall remain
        subject to the confidentiality obligations of this Wallet Agreement.
        <br />
        <br />
        8.4 If the Confidential Information disclosed under this Wallet
        Agreement or any other agreement that we may enter into with you
        includes the personal data of the Discloser and/or personal data of any
        individual:
        <br />
        <br />
        8.4.1 the Discloser hereby consents to the collection, processing, use
        and disclosure of its personal data by the Recipient in accordance with
        this Wallet Agreement and our Privacy Policy; and
        <br />
        <br />
        8.4.2 the Discloser hereby undertakes, represents and warrants to the
        Recipient that the Discloser has notified such individual of the
        purposes for which the Recipient may use his/her personal data and has
        obtained such individual’s consent for the collection, processing, use
        and disclosure of his/her personal data by the Recipient in accordance
        with this Wallet Agreement and our Privacy Policy.
        <br />
        <br />
        8.5 The Discloser acknowledges and agrees that any consent given
        pursuant to this Wallet Agreement in relation to personal data shall
        survive death, incapacity, bankruptcy or insolvency of any such
        individual and the termination or expiration of this Wallet Agreement.
        <br />
        <br />
        <br />
        <br />
        9. Term and Termination
        <br />
        <br />
        9.1. Validity: This Wallet Agreement shall become effective on the date
        that the User subscribes for and/or uses the Services and will continue
        for such period notified to the User in the quotation containing the
        Subscription Fee, unless earlier terminated in accordance with this
        Wallet Agreement (the “Initial Duration”). After the Initial Duration,
        the Terms will automatically renew for successive one-year periods (each
        a “Renewal Duration”), unless either Party notifies the other of its
        intention not to renew at least 30 days prior to the expiration of the
        then-current Duration. “Duration” means the Initial Duration and any
        Renewal Duration.
        <br />
        <br />
        9.2. Termination:
        <br />
        <br />
        9.2.1. Bastion may terminate this agreement and the User’s Account
        Subscription(s) with immediate effect by notice in writing if:
        <br />
        <br />
        9.2.1.1. The User has breached any of the User’s undertakings or
        obligations in this Wallet Agreement;
        <br />
        <br />
        9.2.1.2. Any of the User’s representations or warranties in this Wallet
        Agreement turn out to be false, misleading, inaccurate or incomplete;
        <br />
        <br />
        9.2.1.3. The User has failed to pay any amount due under this Wallet
        Agreement on the due date for payment and remains in default not less
        than thirty (30) days after being notified in writing to make such
        payment;
        <br />
        <br />
        9.2.1.4. The User has committed a material breach of any of this Wallet
        Agreement and (if such breach is remediable) fail to remedy that breach
        within a period of seven (7) calendar days after being notified in
        writing to do so; or
        <br />
        <br />
        9.2.1.5. Bastion and/or the Merchant is/are required to do so under any
        applicable law(s) or pursuant to any request by any governmental or
        regulatory body.
        <br />
        <br />
        9.2.2 The User may terminate this Wallet Agreement and the Account
        Subscription(s) with immediate effect by notice in writing if Bastion
        and/or the Merchant:
        <br />
        <br />
        · discontinues support for any of the digital assets which the User
        holds in the digital wallet;
        <br />
        <br />
        · discontinues support for the signature algorithm which the User
        intends to rely on for any Supported Digital Assets;
        <br />
        <br />
        · revises the Subscription Fee and/or billing cycle and the User
        indicates that it does not wish to continue such Account Subscription(s)
        within fourteen (14) calendar days of such notice; or
        <br />
        <br />
        · revises the Committed Monthly Percentage.
        <br />
        <br />
        9.2.3 In the event of termination pursuant to any of the events listed
        in Clause 9.2.2, Bastion may, in its absolute discretion, refund the
        User the pro-rated amount of the Subscription Fee paid for the relevant
        calendar month.
        <br />
        <br />
        9.2.4 On termination of this Wallet Agreement for any reason:
        <br />
        <br />
        · all licenses granted under this Wallet Agreement shall immediately
        terminate and the User shall immediately cease all use of the Services,
        Software and/or the Documentation;
        <br />
        <br />
        · each Party shall return and make no further use of any Confidential
        Information, Documentation and other items (and all copies of them)
        belonging to the other Party;
        <br />
        <br />
        · Bastion may destroy or otherwise dispose of any of the User Data in
        our possession unless we receive, no later than ten days after the
        effective date of the termination of this Wallet Agreement, a written
        request for the delivery to the User of the then most recent back-up of
        your User Data. Bastion shall use commercially reasonable endeavours to
        deliver the electronic back-up to the User within 30 days of our receipt
        of such a written request, provided that the User, at that time, paid
        all fees and charges outstanding at and resulting from termination
        (whether or not due at the date of termination). The User shall pay all
        reasonable expenses incurred by us in returning or disposing of your
        User Data; and
        <br />
        <br />
        · any rights, remedies, obligations or liabilities of the Parties that
        have accrued up to the date of termination, including the right to claim
        damages in respect of any breach of this Wallet Agreement which existed
        at or before the date of termination shall not be affected or
        prejudiced.
        <br />
        <br />
        9.2.5 Clauses 5, 6, 7, 8, 9.2.3, 9.2.4, 9.2.5 and 11 shall survive any
        termination or expiry of this Wallet Agreement.
        <br />
        <br />
        <br />
        <br />
        10. Force Majeure
        <br />
        <br />
        10.1. Bastion shall not be liable for any delays, failure in performance
        or interruption of the Services which result directly or indirectly from
        any Force Majeure Event.
        <br />
        <br />
        10.2. For the Purpose of this Clause 10 “Force Majeure Event” shall mean
        any event beyond Bastion’s and/or the Merchant’s reasonable control
        which renders impossible or hinders Bastion’s performance of this Wallet
        Agreement, including without limitation:
        <br />
        <br />
        (a) war, riot, civil unrest or revolution, sabotage, terrorism,
        insurrection, acts of civil or military authority, imposition of
        sanctions, embargo, breaking off of diplomatic relations or similar
        actions;
        <br />
        <br />
        (b) terrorist attacks, civil war, civil commotions or riots;
        <br />
        <br />
        (c) acts of God, epidemic, pandemic, flood, earthquake, typhoon or other
        natural disasters or adverse weather or environmental condition;
        <br />
        <br />
        (d) any act of state or other exercise of sovereign, judicial or
        executive prerogative by any government or public authority, including
        expropriation, nationalization, imposition of an export or import
        restriction, quota or prohibition, or compulsory acquisition or acts
        claimed to be justified by executive necessity;
        <br />
        <br />
        (e) fire, explosion or accidental damage;
        <br />
        <br />
        (f) collapse of building structures or failure of plant machinery,
        computers or vehicles;
        <br />
        <br />
        (g) interruption in telecommunications or Internet services or network
        provider services, or failure of equipment or software;
        <br />
        <br />
        (h) hacks, mining attacks (including but not limited to double-spend
        attacks, majority mining power attacks and “selfish-mining” attacks),
        smurfing, phishing, sybil attacks, distributed denial of service, a
        “fork” of the blockchain which may result in more than one version of
        the Supported Digital Asset, cyber-attacks, and any fraudulent activity
        on the part of a third party;
        <br />
        <br />
        (i) interruption or failure of utility service, including but not
        limited to electric power, gas or water; or
        <br />
        <br />
        (j) any labour disputes, including but not limited to strikes,
        industrial action or lockout. The Party not affected by the Force
        Majeure Event may terminate this Wallet Agreement with immediate effect
        by providing written notice to the other Party if the other Party
        remains unable to perform due to the Force Majeure Event for a period of
        more than fifteen (15) days following the date of the Force Majeure
        Event.
        <br />
        <br />
        10.3. For the avoidance of doubt, neither occurrence of a Force Majeure
        Event or the termination of this Wallet Agreement in connection
        therewith shall relieve either Party from any accrued obligations then
        subsisting prior to the occurrence of the Force Majeure Event or
        termination of this Wallet Agreement in connection therewith (including
        any payment obligations for outstanding sums).
        <br />
        <br />
        <br />
        <br />
        11. Miscellaneous
        <br />
        <br />
        11.1. Notices:
        <br />
        <br />
        11.1.1 Any notices, demands or other communications hereunder shall be
        in writing and may be served, in the case of Bastion only, by way of
        publication on our website accessible at https://polity.li
        in-application notification, text messages, instant messaging and/or
        other electronic means or sent or distributed via email:
        <br />
        <br />
        Name: Bastion Cooperative.
        <br />
        <br />
        Email: support@politymvp.com.
        <br />
        <br />
        Element.io: @politymvp:matrix.org
        <br />
        <br />
        If to you, to:
        <br />
        <br />
        Name: _Name of person subscribing for the Account Subscription;
        <br />
        <br />
        Email: _Your email address as notified to Bastion during the onboarding
        process and updated from time to time;
        <br />
        <br />
        Element.io: _Your Element.io address as notified to Bastion during the
        onboarding process and updated from time to time;
        <br />
        <br />
        11.1.2. Any such communication shall be deemed duly given:
        <br />
        <br />
        · in the case of publication on our website (applicable only to
        Bastion), to the User by close of business on the date of publication of
        such notice, demand or communication on our website, provided that if
        such day is not a Business Day or such time not a normal business hour
        then delivery shall be deemed to have occurred on the following Business
        Day;
        <br />
        <br />
        · in the case of communication via in-application notification, text
        messaging, instant messaging and/or other electronic means, on the day
        such notification, text message, instant message and/or other electronic
        medium was sent;
        <br />
        <br />
        · in the case of communication via email, when sent to Bastion’s or the
        User’s email address, by close of business of the date of transmission
        by the email server used by Bastion or the User and/or the service
        provider subject to confirmation of successful transmission, provided
        that if such day is not a Business Day or such time not a normal
        business hour then delivery shall be deemed to have occurred on the
        following Business Day.
        <br />
        <br />
        · Bastion shall not be liable for any failures or delays in the delivery
        of such notice to the User due to reasons not attributable to Bastion
        (including but not limited to the provision of inaccurate or invalid
        contact details, and network failures by third party service providers).
        <br />
        <br />
        11.2. Entire Agreement: This Wallet Agreement constitutes the entire
        agreement between the Parties with respect to the subject matter hereof
        and supersedes all prior oral and written discussions, memoranda,
        understandings and undertakings between them.
        <br />
        <br />
        11.3. Remedies: No remedy conferred by any of the provisions of this
        Wallet Agreement is intended to be exclusive of any other remedy which
        is otherwise available at law, in equity, by statute or otherwise, and
        each and every other remedy shall be cumulative and shall be in addition
        to every other remedy given hereunder or now or hereafter existing at
        law, in equity, by statute or otherwise, provided always that the
        Parties shall not be entitled to rescind this Wallet Agreement on
        grounds of misrepresentation. The election of any one or more of such
        remedies by any of the Parties shall not constitute a waiver by such
        Party of the right to pursue any other available remedies.
        <br />
        <br />
        11.4. Waiver: The rights and remedies of each Party shall not be
        affected by any failure to exercise or delay in exercising any right or
        remedy or by the giving of any indulgence or by anything whatsoever
        except a specific waiver or release in writing and any such waiver or
        release shall not prejudice or affect any other rights or remedies of
        such Party. No single or partial exercise of any right or remedy shall
        prevent any further or other exercise thereof or the exercise of any
        other right or remedy.
        <br />
        <br />
        11.5. Time of Essence: Any time or period mentioned in any provision of
        this Wallet Agreement may be extended by mutual agreement between the
        Parties but as regards any time, date or period originally fixed or any
        time, date or period so extended as aforesaid time shall be of the
        essence.
        <br />
        <br />
        11.6. Successors and Assigns: No Party shall have the right to assign
        all or any part of its interest in this Wallet Agreement without the
        prior written consent of the other Party. This Wallet Agreement shall be
        binding upon and shall inure to the benefit of the Parties and their
        successors and permitted assigns.
        <br />
        <br />
        11.7. Severability: If any provision or any portion of any provision of
        this Wallet Agreement or the application of any such provision or any
        portion of such provision to any person or circumstance, shall be held
        invalid or unenforceable, the remaining portion of such provision and
        the remaining provisions of this Wallet Agreement, and the application
        of such provision of portion of such provision as is held invalid or
        unenforceable to persons or circumstances other than those as to which
        it is held invalid or unenforceable, shall not be affected thereby.
        <br />
        <br />
        11.8 Third Party Rights: A person who is not a party to this Wallet
        Agreement has no right under the Contracts (Rights of Third Parties) Act
        2001, to enforce any Terms, but our assignees, affiliates, third party
        Merchants and contract service providers shall be deemed beneficiaries
        of this Wallet Agreement as if they are parties thereto and shall have
        the rights to enforce the provisions of this Wallet Agreement.
        <br />
        <br />
        11.9. Governing Law: This Wallet Agreement shall be governed by and
        construed in accordance with the laws of Liechtenstein.
        <br />
        <br />
        11.10. Dispute Resolution:
        <br />
        <br />
        11.10.1. Parties shall first attempt to resolve any dispute, controversy
        or claim arising under, out of, in connection with or in relation to
        this Wallet Agreement, including any dispute as to its existence,
        validity, interpretation, performance, breach or termination and any
        dispute relating to any non-contractual obligations arising out of or in
        connection with it (“Dispute”) shall, so far as possible, amicably by
        mutual consultation between Parties. The amicable resolution should be
        commenced as soon as possible after a disputing Party delivers a notice
        of dispute to another disputing Party (“Dispute Notice”).
        <br />
        <br />
        11.10.2. Failing an amicable settlement within 30 calendar days from the
        date of the Dispute Notice, the disputing Parties agree that the Dispute
        shall be referred to and finally resolved by arbitration administered by
        the Liechtenstein International Arbitration Court in accordance with its
        rules currently in force, which rules are deemed to be incorporated by
        reference in this Clause 11.10. The seat of the arbitration shall be
        Liechtenstein. The language of the arbitration shall be English.
      </div>
      <div className='flex px-6 pt-6 pb-5 bg-white border-t border-gray-200 absolute bottom-0 w-full'>
        <Link href='/onboarding/wallet/setup' className='w-full'>
          <Button className='min-w-full'>Agree & Continue</Button>
        </Link>
      </div>
    </OnboardingBlock>
  );
}
