# FED-Assignment1 (OCBC Website)
This is my FED assignment 1 project on a revamp of the OCBC Website. 

The redesigned website features an appealing, responsive design that is ideal for users on desktop and mobile devices. 

I priortize accessibility, offering an intuitive navigation structure that simplifies the user journey, allowing easy access to a wide range of banking services such as the Cards Page or Overview and Transfer Page when login. It is visually more appealing on the Homepage and brings the main promotions message across to them on the Homepage as well as the Cards Page. The overview page has a more meaningful side now, showing card details and breakdown of expenses. Fund Transfer is also available where users might carry out transactions on a larger screen.

## Design Process
The design is based from putting ourselves in the various perspectives of our users' goals and interests, promising that the redesigned OCBC website is an user-friendly resource for a wide spectrum of customers. 

### Target Audience
The new website aims to serves a wide range of users, including investors, companies, and individual customers. We take into account the different needs of these customer categories but overall we aim to attract the elderly with easier navigation and bigger buttons and potential new customers through the browsing of our variety of cards available to earn rewards based on their needs.

### User Stories
-As a busy professional, I want to be able to monitor my finances without wasting too much time on the internet by rapidly checking my account balance and recent transactions.

-As a small business owner, I need an easy-to-use interface to handle payroll and quickly start fund transfers so that I may effectively and trouble-free manage my company's finances.

-As a customer who wants to own a debit card at 16, I need to compare the benefits of different cards at a glance to effectively choose the one ideal for me.

-As a eldery, I need a user-friendly interface where it is easy to navigate, preferably with the help of larger icons and less clicking through link after links.

My wireframe: Browse to Other materials or see below features 

## Features
My wireframe pdf: [My wireframe](https://github.com/j0van-ong/FED-Assignment1/blob/main/Other%20materials/FED_S10258240_JovanOng_Assg1_wiref.pdf)

Overall: Fading animation when it loads for the first time.

index.html Homepage
- Feature 1: Login verification to verify user identity. Done using JavaScript
- Feature 2: OCBC information such as contact at the footer. NON clickable.
- Feature 3: Navigation link to its product and services. ABOUT US AND SIGN UP NOT LINKABLE. SIGNUP Button has effect while hovering

cards.html
- Feature 4: Find out more buttton has hovering effect. 

overview.html
- Feature 5: Simple overview page with graphics for users to take a glance.
- Feature 6: Hovering over navigation bar results a change in color. Navigation buttons are bigger. 
- Feature 7: Confirmation of log out action by prompting from browser. Available once login

transfer.html
- Feature 8: Fund transfer form available for user to make payment online.
- Feature 9: Validation for the form, checking valid account number and amount to transfer, >$0
- Feature 10: Proof of transaction available once user clicks submit. User output is shown.

### Features left to implement
- Originally wanted to open the proof of transaction in a new tab, hence clearer.
- Initially wanted to add a button to scroll down to the bottom page for convienent.

## Technologies used
- [HTML](https://html.spec.whatwg.org/) For the structure of website.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) For the styling of website.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript) For validation and create meaningful interactions.

- [Google fonts](https://fonts.google.com/) For the font style of selected texts or paragraph.
- [Github](https://github.com/) For tracking past codes that are commited onto it.
- [VSCode](https://code.visualstudio.com/) For writing all the codes need and testing of website.

## Testing 
1. Login to Online Banking 
    1. Go to 'Home' Page
    2. For Username: Test1. Password: Password123. 
    3. Try to submit a empty form. A verify message should appear. Enter wrong user or password, a message will appear too.
2. Funds transfer form
    1. After login, go to the transfer navigation page, 'transfer.html'.
    2. A valid account number must contain exactly 12 numbers. Omit the dashes. Transfer value must be >$0.
    3. Submitting an empty form would result in a error message. Same for entering non-numerical account numbers or not 12 numbers.
    4. Once submit, a proof of transaction should pop out below the page. Scroll down to verify the correct details input by you.
3. Log out Confirmation
    1. Logging out from overview or transfer.html pages.
    2. When clicking the log out button, a prompt should appear. Clicking yes will return to homepage, while no will remain at same page.

- IMPORTANT 
- for index.html, the line 41 did not have a close tag >, as closing it results in my entire screen being red. It should pass the validator if i close it but for the visual I will not be closing it.
When on mobile view, the webpage should be similar to the structure of my wireframe shown. [My wireframe](https://github.com/j0van-ong/FED-Assignment1/blob/main/Other%20materials/FED_S10258240_JovanOng_Assg1_wiref.pdf)

- When creating the website, my login form and advertisement message in homepage will arrange in column direction after resizing to a smaller screen. This may be seen if your laptop screen is smaller. 
- Same for the overview page, some images or buttons may fall outside the given container when screen size is smaller. 
- However, all should be fixed when resizing it to mobile view.

## Credits
- [OCBC Offical Website](https://www.ocbc.com/personal-banking)
- [Pinterest Zappy](https://i.pinimg.com/564x/e6/71/e0/e671e0f90e0b8b4eadaa1f9111b0125e.jpg)
- [Pinterest Dribbble](https://i.pinimg.com/564x/56/14/1e/56141e7582cedf5a490b182a860c288c.jpg)

### Content 
- Content from cards page from [OCBC Website Cards](https://www.ocbc.com/personal-banking/cards/debit-card)

## Media
The media used in this site were obtained from...

- [OCBC NPARK POSTER](https://www.nparks.gov.sg/-/media/pcn-ocbc-ride-safe/ocbc-nparks-cim-posters-14802.jpg?la=en&hash=523E2A0F91503321CD2E0E0D93A6942468AB4156)
- [OCBC BUILDING](https://www.bankofsingapore.com/iwov-resources/assets/dam/aboutus/about-us-ocbc-bank-thumbnail.jpg)
- [OCBC LOGO WHITE](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1pkdhtcrACyndJ6PwJfAhqluDdG0qSyWP5wZgzzT7XdjxCT6avXTibm56B8R3UaJBg&usqp=CAU)
- [360 ADVERTISEMENT](https://thefinance.sg/wp-content/uploads/2020/02/195FB4F2-6794-48F0-9FEB-6A8AD0F625DE.jpeg)
- [CAT ADVERTISEMENT](https://www.ocbc.com/personal-banking)
- [GARDENS BY THE BAY](https://www.flowerpicturegallery.com/d/1514633-1/Another+View+of+Singapore+Skyline+from+OCBC+Skywalk.jpg)
- [OCBC CARDS FOR ALL](https://www.ocbc.com/personal-banking/cards/debit-card)
- [OCBC RED CARD OVERVIEW PAGE](https://pngset.com/images/ocbc-atm-contactless-card-carmine-text-credit-card-label-transparent-png-1175536.png)
- [BAR GRAPH](https://www.ntu.org/Library/imglib/2020/10/biden-spending-graph.png)
- [DONUT CHART](https://www.pinterest.com/pin/653444227186135601/)
- [PAY BILL ICON](https://www.expresscfo.ae/wp-content/uploads/2022/08/Cost-Effectiveness.png)
- [LOCK ICON](https://th.bing.com/th/id/OIP.gVpNJD6ysRPkjO6j02qR3AHaHa?rs=1&pid=ImgDetMain)
- [MASTERCARD LOGO](https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2016-2020.png)
- [VISA LOGO](https://decographic.net/wp-content/uploads/2014/02/Visa_2014_logo_detail.svg_.png)
- [RED OCBC LOGO](https://logos-download.com/wp-content/uploads/2016/12/OCBC_Bank_logo_logotype_Singapore.png)
- [GREEN TICK](https://www.abacuspg.co.uk/wp-content/uploads/2016/05/Green-Tick-PNG-Pic.png)

### Acknowledgement
- I received major inspiration from the official OCBC website, as well as Pinterest indicated in the Credits section.
- The use of JavaScript for displaying input of user was referenced to the Week 7 Slides in Event Handling.






