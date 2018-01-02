---
layout: page
title: Get Started
product: avaTax
doctype: documentation
nav: avaTax
avaform: 1
---
<div class="half">
  <h2>Four simple steps to getting started in calculating sales tax with our REST API</h2>
  <strong>If you already have an Avalara AvaTax account</strong> and want to dive into the details, a good place to start is our <a href="/blog/2013/11/11/introduction-to-the-avalara-avatax-api">Introduction to the Avalara AvaTax API</a>.
  <h4><img src="/public/images/blog/orange-box-1-sm.png" alt="1" /> Try the API</h4>
  Want to know how the API looks? Make some requests to either <a href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/"> Calculate Tax</a> or <a href="/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/">Validate an Address</a>. See how different inputs produce different tax calcluation results, and see what kind of tax information you can expect to get back.

  <h4 id="signup"><img src="/public/images/blog/orange-box-2-sm.png" alt="2" /> Create an AvaTax Account</h4>

  <p>To get started, we’ll first set you up with an AvaTax account. This account will allow you to get started right away using our production environment, including access to the full AvaTax Pro System Tax Code functionality and Global Nexus Jurisdictions.</p>

  <p>This account is initially active for 60 days, but you can request an extension if needed. You will need to add company profile and tax profile information to calculate sales tax. If you decide to purchase a subscription at a later date, it can be added directly to this account so that no data migration is required.</p>

  <p>Use this form to request a free trial account today:</p>

  <div class="avaform-wrapper"></div>

  <h4><img src="/public/images/blog/orange-box-3-sm.png" alt="3" /> Visit the AvaTax Website</h4>

  To calculate tax correctly, we'll need to know a few things about your company.  Fortunately, the AvaTax Website provides a streamlined onboarding process that helps you configure your company quickly and easily.  Visit <a target="_blank" href="https://sandbox.admin.avalara.com">AvaTax Website for Sandbox Accounts</a> and walk through the five minute setup process.

  <h4><img src="/public/images/blog/orange-box-4-sm.png" alt="4" /> Calculate Tax</h4>

  Your next step is to calculate tax online using the interactive <a target="_blank" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">AvaTax API reference page</a>.  If you want to sell $100 worth of Yarn at a retail location in Irvine, California, here's what your transaction would look like:

</div>

```json
{
  "type": "SalesInvoice",
  "date": "2017-03-06",
  "customerCode": "ABC",
  "addresses": {
    "singleLocation": {
      "line1": "123 Main Street",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92615"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 1,
      "amount": 100,
      "description": "Yarn"
    }
  ]
}
```

<div class="half">
  <p>You can copy and paste this text into the `model` parameter box on the <a target="_blank" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> API call, then click `Try it out!`.  If you get an `Authorization Incomplete` error, click the `Authorize` button on the top right hand corner of the page and fill out your credentials, then try creating the transaction again.</p>

  <p>Mixed in along with all the diagnostic information, you'll see this data in the result:</p>
</div>

```json
{
  "id": 279797011,
  "code": "7a6e9396-e152-4bb2-821c-6d746c3641be",
  "companyId": 238146,
  "date": "2017-03-06",
  ...
  "totalAmount": 100,
  "totalExempt": 0,
  "totalTax": 7.75,
  "totalTaxable": 100,
  "totalTaxCalculated": 7.75,
  ...
}
```
<div class="half">
  <p>This means you should charge your customer $7.75 worth of tax for this sale!</p>

  <h2 style="display: inline">Optional Step: </h2>
  <h4 style="display: inline">Download an AvaTax SDK</h4>

  <p>Avalara has a wide variety of available software development kits for major languages.  If you are writing your own code in a supported language, the AvaTax software development kit will help you get up to speed quickly!</p>

  <ul class="normal">
      <li><a href="https://github.com/avadev/AvaTax-REST-V2-DotNet-SDK#installing-the-dotnet-sdk">Use the AvaTax DotNet SDK</a></li>
      <li><a href="https://github.com/avadev/AvaTax-REST-V2-JRE-SDK#installing-the-jre-sdk">Use the AvaTax Java Runtime SDK</a></li>
      <li><a href="https://github.com/avadev/AvaTax-REST-V2-PHP-SDK#installing-the-php-sdk">Use the AvaTax PHP SDK</a></li>
      <li><a href="/sdk/soap">Download software development kits for AvaTax SOAP</a></li>
  </ul>

  <p>The AvaTax SDK contains a lot of useful features to make it quick and easy to begin using all of the world-class features built into AvaTax.  Even better, all of our SDKs are fully open source and we welcome bug reports and pull requests to add new features!</p>

  <h2>What's Next?</h2>

  <p>We're really proud of the world-leading AvaTax platform, and we hope you'll have as much fun using it as we have fun building it!  Here are some ideas for next steps:</p>

  <ul class="normal">
      <li>Read our <a href="/blog">Developer Blog</a> for up-to-date news and articles about the great features of AvaTax</li>
      <li>Ready to upgrade to a production account?  Please <a href="https://www.avalara.com/contact-us/">contact the sales department</a> anytime and we'll be happy to help you out.</li>
      <li>Want to develop a certified connector?  Visit our <a href="/certification/">Certified Avalara Integration</a> page today and get started!</li>
      <li>Want more information about all the great API features in AvaTax?  Visit the <a href="/api-reference/avatax/rest/v2/">online AvaTax API reference</a> now!</li>
      <li>Have a question about the API, or want to share your success story?  Visit the <a href="https://community.avalara.com/avalara">AvaTax Developer Community</a> and ask questions and share tips and tricks with other developers from around the world!</li>
  </ul>
</div>
