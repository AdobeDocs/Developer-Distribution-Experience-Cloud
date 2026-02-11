---
keywords:
  - App Manager
  - App Builder app
  - server-to-server
  - Developer Distribution
  - Extensibility
  - Adobe Exchange
  - Developer Console
  - Digital Experience Partner Program
  - DXP
  - Developer Console
title: FAQ - Frequently Asked Questions
description: This is the FAQ page
---

<HeroSimple slots="heading, text" background="rgb(141, 52, 78)"/>

# What's New: Introducing a new enterprise credential

For partners to build and distribute server-to-server integrations.


Developer Distribution is a unified portal to self-submit & manage Experience Cloud listings to be published on [Adobe Exchange](https://exchange.adobe.com/apps/browse/ec).
Now server-to-server integrations can be submitted by [Digital Experience Partner Program](https://partners.adobe.com/digitalexperience/) members along with Catalog listings and App Builder apps for Adobe’s Experience Cloud products in Developer Distribution. Click the upper right Distribute button when you have a partner login and are ready to create or manage your listing. 


## Server-to-server integrations

- [What is a server-to-server integration?](#what-is-a-server-to-server-integration)
- [Can customers acquire server-to-server integrations from Exchange Marketplace today?](#can-customers-acquire-server-to-server-integrations-from-exchange-marketplace-today)
- [What are the steps to create a server-to-server integration listing for public distribution?](#what-are-the-steps-to-create-a-server-to-server-integration-listing-for-public-distribution)
- [If I already have a server-to-server integration listed as a catalog listing, how do I change it?](#if-i-already-have-an-integration-listed-as-a-catalog-listing-how-do-i-change-it-to-a-server-to-server-integration-listing)
- [I do not currently have a server-to-server integration listed as a catalog listing on Exchange Marketplace, but I am building one, how should I list it?](#i-do-not-currently-have-a-server-to-server-integration-listed-as-a-catalog-listing-on-exchange-marketplace-but-i-am-building-one-how-should-i-list-it)
- [I am trying to create an enterprise credential on Developer Console after choosing the Adobe API I want to add for my integration, but I only see the option to choose the older ‘Server-to-server authentication’ credential on the screen to choose authentication type, what should I do?](#i-am-trying-to-create-an-enterprise-credential-on-developer-console-after-choosing-the-adobe-api-i-want-to-add-for-my-integration-but-i-only-see-the-option-to-choose-the-older-server-to-server-authentication-credential-on-the-screen-to-choose-authentication-type-what-should-i-do)
- [Where can I get more information or help?](#where-can-i-get-more-information-or-help)


## Catalog listings

- [What is a catalog listing?](#what-is-a-catalog-listing)
- [Can I use Developer Distribution to create and manage catalog listings?](#can-i-use-developer-distribution-to-create-and-manage-catalog-listings)
- [What are the steps to create a catalog listing for public distribution?](#what-are-the-steps-to-create-a-catalog-listing-for-public-distribution)
- [Where can I get more information or help?](#where-can-i-get-more-information-or-help)


## App Builder apps


- [What is an App Builder app?](#what-is-an-app-builder-app)
- [What are the steps to create an App Builder listing for public distribution?](#what-are-the-steps-to-create-an-app-builder-listing-for-public-distribution)
- [What are the three ways to list and monetize App Builder applications?](#what-are-the-three-ways-to-list-and-monetize-app-builder-applications)
- [If I previously created a private App Builder App via the App Builder Trial Sign up, can I distribute it publicly?](#if-i-previously-created-a-private-app-builder-app-via-the-app-builder-trial-sign-up-can-i-distribute-it-publicly)
- [Where can I get more information or help?](#where-can-i-get-more-information-or-help)


## Server-to-server integrations Answers

### What is a server-to-server integration?

Server-to-server integrations are API based integrations between two or more servers which essentially exchange data, protected by security mechanisms like Oauth authentication. The data exchange happens completely between the servers, so these information exchanges aren’t visible to individual users.  

Adobe Exchange has 275+ public server-to-server integrations that extend Experience Cloud products; but these are mostly catalog listings. This means customers can browse them on Adobe Exchange but need to contact the publisher of that application directly to acquire them.

### Can customers acquire server-to-server integrations from Exchange Marketplace today?

In March 2025, Adobe introduced a new enterprise credential that enables developers to publish server-to-server integrations which users can acquire from Adobe Exchange without having to contact the developer directly. Existing metadata-only server-to-server integrations that cannot be acquired from the Exchange Marketplace are referred to as 'catalog listings' whereas 'Server-to-server' integration listings refer to integrations created with the new enterprise credentials. The process for creating these listings will differ.  

- A catalog listing can be created directly from Developer Distribution, without the publisher needing to go to Developer Console ahead of time. Note, however, that catalog listing integrations still require Oauth server-to-server credentials generated on Developer Console to be able to function correctly.
- A server-to-server integration must be created in Developer Distribution with an existing project that already has an enterprise credential associated with it, assigned in Developer Console.

### What are the steps to create a server-to-server integration listing for public distribution?

1. Login or join the [Digital Experience Partner Program](https://partners.adobe.com/digitalexperience/). Silver Membership or above includes the benefit of public listings on the Adobe Exchange Marketplace. Free (Community) membership includes unlisted public detail page URLs for approved listings, which the developer can share with customers. Upon partner program registration approval, an organization (org/account) will be assigned to your login credentials, which you should choose when logging into Developer Distribution (DD) or Developer Console (DC)
2. After your registration has been approved, submit a request for an Adobe product sandbox for any required APIs using the [partner sandbox request ticket](https://partners.adobe.com/digitalexperience/resources/sandboxes). You will need a sandbox for building your integration in [Developer Console](https://developer.adobe.com/developer-console/), which will be assigned to your partner organization/account. Note that for server-to-server integrations an enterprise credential needs to be associated with the same Developer Console project that is assigned to the listing.
3. Create a new server-to-server integration listing for your integration in [Developer Distribution](https://developer.adobe.com/developer-distribution). Step 2 in creating a listing is choosing a project that already has your enterprise credential created previously in Developer Console.

### If I already have an integration listed as a catalog listing, how do I change it to a server-to-server integration listing?

All the server-to-server integrations created before March 2025 are listed as catalog listings on the Exchange Marketplace. If you have such an integration, customers on the Exchange Marketplace can’t acquire it or manage it. If you would like to list it as a server-to-server integration, you’ll need to create an enterprise credential in Developer Console and create a new listing on Developer Distribution, in the same project as the enterprise credential. You are recommended to retract your legacy catalog listing from Exchange, when the new server-to-server integration listing gets published, so that customers can benefit from the improved workflows and can acquire and manage the listing from Exchange.

### I do not currently have a server-to-server integration listed as a catalog listing on Exchange Marketplace, but I am building one. How should I list it?

All the steps to list a server-to-server integration remain the same as detailed in the previous question, irrespective of whether you already have the integration listed as a catalog listing or not. Note that the key difference between listing an integration as a catalog listing or a server-to-server integration listing is that the latter integration must be built using the new enterprise credential on Developer Console.

### I am trying to create an enterprise credential on Developer Console after choosing the Adobe API I want to add for my integration, but I only see the option to choose the older ‘Server-to-server authentication’ credential on the screen to choose authentication type, what should I do?

The new enterprise credential is visible on the screen that helps you choose authentication type. On this screen, you should see two options: ‘Server-to-server Authentication’ and ‘Admin authentication’. You need to choose the latter option ‘Admin authentication’ if you are building a server-to-server integration for distribution on the Exchange Marketplace. If you are not able to see or choose this option, contact [Partner Support](https://partners.adobe.com/digitalexperience/m/forms/case) with details of the kind of integration you are building, and which Adobe API/s you want to use in your integration.

### Where can I get more information or help?

Submit a ticket to [Digital Experience Partner Support Team](https://partners.adobe.com/digitalexperience/m/forms/case)

## Catalog listing Answers

### What is a catalog listing?

Catalog listings are metadata-only server-to-server listings that extend one or more Adobe Experience Cloud products, but without an acquisition workflow on the Exchange Marketplace. The existing 275+ public catalog listings on [Adobe Exchange](https://exchange.adobe.com/apps/browse/ec) require enterprise customers to contact the developer to be acquired and installed.


### What are the steps to create a catalog listing for public distribution?

1. Login or join the [Digital Experience Partner Program](https://partners.adobe.com/digitalexperience/). You will have to join the partner program at the Silver level or above for your published listing to be displayed publicly on the Exchange Marketplace. At the Community (free level), only an unlisted detail page URL is available to share with potential customers. Public listings for Experience Platform Launch are available at the free level. Upon partner registration approval, an organization (org) will be assigned to your Adobe login credentials, and you’ll have access to create catalog listings in Developer Distribution.
2. After your registration has been approved, submit a request for an Adobe product sandbox for any required API using the [partner sandbox request ticket](https://partners.adobe.com/digitalexperience/resources/sandboxes). You will need a sandbox for building your software integration in Developer Console, which you can then list as a catalog listing on Developer Distribution. Note that for catalog listings, the credential doesn’t need to be in the same Developer Console project as the one where you create your catalog listing.
3. Create a new catalog listing for your software integration in [Developer Distribution](https://developer.adobe.com/developer-distribution). You will have the option to associate the listing with an existing Console project or go to Developer Console later and add an API to a project created for your new listing.

### Where can I get more information or help?

Submit a ticket to the [Digital Experience Partner Support Team](https://partners.adobe.com/digitalexperience/m/forms/case)

## App Builder app Answers

### What is an App Builder app?

Adobe Developer App Builder provides a unified third-party extensibility framework for integrating and creating custom experiences to extend Adobe products. Enterprise customers can browse listings and then acquire and install App Builder apps from [Adobe Exchange](https://exchange.adobe.com/apps/browse/ec).

### What are the steps to create an App Builder listing for public distribution?

1. Login or join the [Digital Experience Partner Program](https://partners.adobe.com/digitalexperience/). You will have to join the partner program at the Silver level or above for your published listing to be displayed publicly. As a Community (free) partner, only an unlisted detail page URL will be available to share with potential customers. Upon partner registration approval, an organization (org) will be assigned to your Adobe login credentials (Personal Account).
2. After your registration has been approved, submit a request for an App Builder Sandbox using the [partner sandbox request ticket](https://partners.adobe.com/digitalexperience/resources/sandboxes).
3. Once you receive confirmation of your App Builder sandbox, go to [Developer Console](https://developer.adobe.com/developer-console/), add App Builder to a project, and create your App Builder app.
4. Create and submit a new or updated listing for an App Builder app using Developer Distribution. You will be given the option to pick an existing project that you created in #3 (most common) or create the project in Developer Distribution and go back to the Console to add an API later.

### What are the three ways to list and monetize App Builder applications?

1. **Deployed on Exchange, payment on Exchange** – Create an App Builder application for Experience Cloud and under Listings > Listing details > Payment tab > Purchase Method, select Free, Perpetual, or Subscription. If Perpetual or Subscription is selected, the publisher will also need to create a FastSpring account at Profile > Payment > FastSpring Key before submission. A link to create a FastSpring account and obtain FastSpring Key/accountID is provided below the "Payment through FastSpring" header. Only one FastSpring Key/accountID is required per publisher no matter how many paid listings are created. Note: 92% of the application purchase is deposited to the publisher account; FastSpring keeps 8% for transaction fees.

2. **Deployed on Exchange, monetized by publisher** – If a publisher wants the App Builder app deployed on Exchange but wants to monetize the application in-app or on their own website: create an App Builder application for Experience Cloud and under Listings > Listing details > Payment tab > Purchase Method, select Additional Purchase Required and enter a description of how and where the transaction occurs and how premium features are unlocked. This makes it clear to the customer that payment is required for premium features before they get the app deployed on Exchange.

3. **Deployed and monetized by publisher** – Occasionally an App Builder publisher will prefer to configure and deploy a custom App Builder application for each paying customer. In this case the publisher should create a Catalog Listing for Experience Cloud and ensure these two actions are taken before submitting: at Listings > Listing details > Products > Application Type, select both App Builder; and attach a document that explains custom configurations, installation instructions, and payment terms at Listings > Listing details > Services > Installation instructions type > Custom installation instructions.

### If I previously created a private App Builder App via the App Builder Trial Sign up, can I distribute it publicly?

Yes, this is the process that any developer should follow if they want to distribute an app builder ISV app that has already been built privately. [Public App Builder Distribution Guide](https://developer.adobe.com/app-builder/docs/guides/distribution/public/)

1. Develop or update an App Builder App code.
2. Push it to a private workspace for testing.
3. Once ready, package it into a ZIP file.
4. If your partner login credentials are not already associated with the org/account used for the private app builder app, ask one of the developers from your company associated with that org to add your partner login credentials in [Admin Console](https://adminconsole.adobe.com). If you don't know anyone in that org, you can file a [partner support ticket](https://partners.adobe.com/digitalexperience/m/forms/case) and ask for the org name and emails of others in your company for you to contact.
5.	When logging into [Developer Distribution](https://developer.adobe.com/distribute) choose the org/account that you joined in step 4, (it should appear in the upper right org switcher) and 'Create new listing'.

### Where can I get more information or help?

Learn how to build an App Builder app [App Builder documentation](https://developer.adobe.com/app-builder/docs/get_started/app_builder_get_started/first-app). If you need additional assistance, please submit a ticket to the [Digital Experience Partner Support Team](https://partners.adobe.com/digitalexperience/m/forms/case).
