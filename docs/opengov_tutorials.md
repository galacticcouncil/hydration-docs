---
id: opengov_tutorials
title: Using OpenGov (How-Tos)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## **The Referendum Process**

Before proceeding with making a referendum, identify the right track and origin for it. For instance, if the referendum is for requesting funds from treasury, select the treasury track with appropriate spend limits. Read [this post](docs/opengov_theory.md) to learn more about Origins and Tracks.

Below is the ideal process to follow:

1. Create a discussion post about your proposal on Subsquare. This post allows the community to deliberate and recommend improvements.
2. Create a referenda on Subsquare.

That said, you are free to create a referenda without first creating a discussion post.

---

## **How to Create a Discussion Post**

1. Go to **Subsquare > Discussions > New Post**. You can do so following this link: [https://](https://hydradx.subsquare.io/post/create)[hydration.subsquare.io/post/create](https://hydration.subsquare.io/post/create)
2. Fill in the **title, label,** and **description** of your proposal.

<div style={{textAlign: 'center'}}>
  <img alt="subsquare_UI_new_discussion_post" src={useBaseUrl('/opengov_tutorials/new_discussion_post.jpg')} width="500px" />
</div>

3. Click **‘Create’** and sign the transaction.

Having created a discussion post for your proposal, you should share the link to the post on community channels and your socials. The goal is to get feedback from the community and also give you an opportunity to address any concerns raised.

---

## **How to Create a Referendum**

It is advisable to create a discussion around a proposal before making a referendum. This increases your chances of getting your referendum passed as you will get a chance a to listen to and act on community feedback and concerns.

1. Go to **Subsquare > Referenda > New Proposal** https://hydradx.subsquare.io/referenda
    
    If you are familiar with creating preimages, then go ahead and choose any of the two main options (New preimage, I already have preimage).

<div style={{textAlign: 'center'}}>
<img alt="subsquare_UI_new_referendum" src={useBaseUrl('/opengov_tutorials/new_referendum.jpg')} width="500px" />
</div>
    
2. If you do not know how to use preimages, then select one of the **Quick Start** options that best fits your proposal. Below are the options:
    1. **Treasury spend local** - for proposals that want to request HDX.
    2. **Treasury USDx spend** - for proposals that seek to request USDC/T.
    3. **Remark** - for proposals that wish to propose changes to the protocol/ecosystem. most ideal for the ‘Wish for Change’ track.
3. In the following dialog box, enter all relevant details. It is important to specify the correct track for your proposal. Once done, click **‘Create Preimage’** and sign the transaction. This will create your proposal/referendum. But note that until you pay the Decision Deposit, this referendum is, in a sense, inactive since any votes won’t count. At this stage, there are two things you need to do.
4. **Add contextual information**. You can do this by editing the referendum to add the information. Or you can link to the discussion post you created before.
6. **Pay Decision Deposit**. Click the Decision Deposit button on the ’Status’ dialog box of your referendum page. Enter the required HDX and sign the transaction.

At this point, your referendum is now fully created and available for voting.

---

## **How to Vote on Referendum**

1. Go to the referendum page on **[Subsquare](https://hydradx.subsquare.io/democracy/referenda)**.
2. Click the ‘**Vote**’ button. This will bring up a dialog box.
3. Choose your vote from 4 options
    1. **Aye**
    2. **Nay**
    3. **Split** - for when you wish to vote Aye and Nay.
    4. **Abstain** - for when you feel unqualified to vote on a proposal but want your tokens to count towards the Approval and Support parameters that determine whether or not a proposal passes. For more details on what this means, read this post.
4. Enter the **HDX** value of your vote.
5. Enter your vote’s **conviction multiplier**. The higher the conviction, the longer your HDX is locked and the more power your votes have. To learn more about conviction multipliers, read [this post](docs/opengov_theory.md).
6. Click ‘**Confirm**’ and sign the transaction.

You have successfully voted.

---

## **How to Cancel or Kill a Referendum**

To learn more about cancelling and killing a referendum, read [this post](docs/opengov_theory.md).

1. Go to the [Polkadot-JS UI](https://polkadot.js.org/apps/).
2. Ensure you are on the **Hydration** network. If you are, you will see the Hydration logo at the top left corner of the page. If you see a different logo (for instance, Polkadot), then click that logo and it will show a drop down menu. Scroll down to HydraDX (or Hydration), select a server, and then scroll up to click ’Switch’.
3. Navigate to **Governance > Referenda**.
4. Click on the **"Add Preimage"** button.
5. In the **’Send from Account’** dialog box, choose the account you want to use.
6. In the **‘Propose’** section, select **‘Referenda’** from the drop down menu.
7. Beside the ‘Propose’ dialog box, specify the action you wish to take.
    1. If you wish to Cancel the referenda (stop the referenda without slashing the decision deposit bonded by the proposer), then select **‘cancel(index)’** in the drop down menu.
    2. If you wish to Kill the referenda (stop the referenda without slashing the decision deposit bonded by the proposer), then select **‘kill(index)’** in the drop down menu.
8. Enter the index number of referenda you wish to cancel. i.e. If you wish to cancel referendum 256, you will enter ‘256’ in the index dialog box.