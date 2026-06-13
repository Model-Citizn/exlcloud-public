/* Article data - auto-generated from markdown files */
const ARTICLES = [
  {
    title: "Error Checks for Excel and Financial Modelling",
    slug: "error-checks-for-excel-and-financial-modelling",
    author: "Lance Rubin",
    coauthor: "Maarten (Spreadsheetsoftware)",
    date: "2023-07-14",
    excerpt: `After graduating in Mathematical Economics, Maarten worked for 10 years as a quantitative consultant in both the profit and non-profit sectors. Throughout his career he has built and audited hundreds of small and large E...`,
    tags: ["Financial Modelling","Excel","Error Checking"],
    heroType: "shield",
    content: `<h3>Introduction to the co-authors</h3>
<p>After graduating in Mathematical Economics, Maarten worked for 10 years as a quantitative consultant in both the profit and non-profit sectors. Throughout his career he has built and audited hundreds of small and large Excel models for different purposes, which gave him a detailed insight into the possibilities and drawbacks of using Excel.</p>
<p>Maarten provided key decision makers in the banking, real estate and stock market industries with accurate planning and investment decision models built in Excel. These models provided the necessary support for successful multi-million euros transactions.</p>
<p>Because of Maarten’s extensive experience with financial models, he is often approached to consult to companies on this matter or to provide them with very specific training to highly qualified professionals.</p>
<p>Although his mother tongue is Dutch, his English, German and French is impeccable.</p>
<p>In 2011 Maarten decided to take his knowledge and experience to a new level by helping even more professionals leverage the best of Excel (flexibility) whilst removing the draw backs (errors).</p>
<p>He started a company called <a href="https://spreadsheetsoftware.com/" target="_blank" rel="noopener noreferrer">Spreadsheetsoftware</a> with a lot of ideas, enthusiasm and a vision to develop, amongst other things, the most advanced error detection software in Excel called ExcelAnalyzer.</p>
<p>ExcelAnalyzer comes as an extra button in Excel and is positioned to be the solution to resolve errors and risks so that Excel users can gain confidence in their spreadsheets again.</p>
<h3>Why did Maarten select the topic and why is he passionate about it?</h3>
<p>I am no stranger to Excel errors and in fact, like many finance professionals, spreadsheeters and financial modellers, I had to face the reality that humans will naturally create errors without even realising it.</p>
<p>Excel is a development platform for decision making and its flexibility is both its strength and its weakness.</p>
<p>Whilst humans are incredibly creative and we assist in multi-million-euro transactions, there are some easy tips and tricks that we can apply with relative ease to make us even more awesome.</p>
<p>I wanted to help people save time and make more accurate decisions by sharing these tips.</p>
<h3>Topic and context in 3 sentences</h3>
<p>Here are a few key facts to kick this off:</p>
<ul><li>The reality is that anyone who has worked in a spreadsheet is not immune to the possibility of errors due to its flexibility which is both a blessing and a curse at the same time.</li>
<li>There are lots of statistics on this but a common one is that more than 90% of spreadsheets contain serious errors, while more than 90% of spreadsheet users are convinced that their models are error-free – <a href="https://www.accaglobal.com/an/en/student/sa/features/talking-technology---spreadsheet-solutions.html" target="_blank" rel="noopener noreferrer">ACCA article</a>.</li>
<li>It’s not Excel that is the problem, but the way it is used.</li></ul>
<h3>If you had to teach this topic in a class to school kids what key tips would you give them to focus on?</h3>
<p>Prevention is always better (cheaper) than the cure so be sure you follow best practice and keep your spreadsheets hygienically sound.</p>
<p>Kids generally don’t like to go to the doctor and especially not the dentist. So, stay away from too many sugary drinks, lollies and food that is generally bad for your health.</p>
<p>Errors in spreadsheets can be bad for your health too when a decision is being made based on an error-riddled spreadsheet.</p>
<p>The problem is most people don’t know that they have an error until it’s too late and very expensive to fix retrospectively.</p>
<p>Review recent articles in the series mentioned below to reduce the risk of errors by designing Flexible, Appropriate, well Structured and Transparent models.</p>
<p>Explore some of the tips in this article to reduce your risk of a bad tooth or other health issues from a poor diet in your Excel workbooks.</p>
<h3>What practical steps can people take now to learn more?</h3>
<p>Spreadsheeters use Excel like a messy teenager’s bedroom with stuff lying everywhere and no structure, whilst a financial modeller takes care in how they build their Excel models, and this includes error detection and trapping.</p>
<p>However, even professional financial modellers know that humans make errors and whilst it’s possible to reduce the error risk significantly it cannot be eliminated without the use of model audit software and another pair of eyes. Even then errors can sneak through after an audit.</p>
<p>To give this article justice it’s important to distinguish between error trapping or prevention and error detection and remediation.</p>
<p>Think of it like eating well and doing exercise that can help prevent you from getting sick without doing anything extra. Hygiene is a factor of life and you avoid problems down the track as the context for prevention and trapping errors in Excel.</p>
<p>Compared to error detection when you feel unwell you try to detect what is causing that issue and stick a thermometer in your mouth. Once you know it’s a temperature you self-medicate by taking a day off work, sleeping, drinking lots of water and perhaps taking a cold and flu tablet if you are a bit sniffly.</p>
<p>If you feel really sick the day after, then you go see a professional doctor (aka model auditor) for some professional help on your problem.</p>
<p>So why don’t we follow this same regime for our most favourite software Excel. For the purpose of this article we are referring to actual errors compared to alerts of potential errors.</p>
<p>An alert may not necessarily be an error, but it needs to be investigated as a possible business problem like breaching debt covenants or outside tolerance of certain KPIs.</p>
<strong>ERROR TRAPPING OR PREVENTION</strong>
<p>● <strong>Data Validation</strong> – this is one of the most under-utilised native functions in Excel that define what is acceptable in a particular cell. If anything doesn’t fit that rule then it throws out an error before it can cause damage ie only positive numbers or no text etc.</p>
<p>The use of data validation is a great way to prevent your spreadsheet from getting sick, like the example below.</p>
<p>You can even customise your error messages and input message alerts.</p>
<p>● <strong>Error trapping via flags or custom-built error checks</strong> – most financial modellers would build a model which contain specific error flags within it. The reason for doing this is to highlight in an instant when the error has occurred.</p>
<p>The flag can be custom built with an IFERROR or ISERROR formula if triggered.</p>
<p>Use conditional formatting for extra effect as it highlights clearly in red that errors exist.</p>
<p>Better yet, consider adding it to the title of the model for really broadcasting issues straight away, no matter where you are in the model you will see the heading change.</p>
<p>Here is a simple example to trap any Excel error (not a logic error, example here is #DIV/0!) in any series of precedent formula cells:</p>
<p>One of the best custom-built error checks is whether the Balance Sheet is in balance or not?</p>
<p>If the Balance Sheet is out of balance, it's an Error, NO If, Buts of Maybe’s, its wrong!</p>
<p>This is one of the primary reasons why a 3-way model is more robust than simply a cash flow only model without the Balance Sheet check.</p>
<p>There are different ways to create this error check for the Balance Sheet or any other cross balancing error check, where you expect two numbers from different parts of the model to equal each other.</p>
<p>Another example is revenue by customer and product should equal each other.</p>
<p>You should setup these error checks as you build the model and ensure that you gain more confidence in the overall accuracy of the calculations.</p>
<p>You would setup this error check where you expect the answer to equal zero when you subtract each number from the other.</p>
<p>Setup this error check formula using the following syntax:</p>
<p>=IF((C3-C5-C7)<>0, (C3-C5-C7),0)</p>
<p>Again, using conditional formatting can be useful to highlighting the errors as seen below:</p>
<strong>ERROR DETECTION</strong>
<p>When you feel like there could be an error but not sure where it is then you should grab that thermometer to test whether there is a problem.</p>
<p>Thermometers in the Excel world comes in the form of error detection tools that you can apply to your own models. Some of these are in-built to Excel but are often ignored and sometimes provide too many false positives.</p>
<p>Those tools that do not come with native Excel have been used by model auditors for many years and are well known to professional financial modellers, however most of these are built as an add-in using VBA (which is one of the most inefficient coding languages for heavy Excel processes).</p>
<p>However, this has advanced in the form of more efficient coding languages like VB.Net and C#, which ExcelAnalyzer currently uses.</p>
<p>Once you use your Excel thermometer you might see some interesting indicators of your spreadsheet health like number of hardcoded formulas, wasted space, model flow and complexity, unique formula count, redundant names, Excel error count and highlighting possible logic errors for checking inconsistent formulas.</p>
<p>Breaking the rules mentioned in the prior article like one row, one formula can be seen easily and quickly.</p>
<p>It’s almost like getting a full blood test on your spreadsheet without having to pay a doctor to get it.</p>
<p>But sometimes you might have to visit your doctor if your test results are really bad, they would show up things like this.</p>
<p>Note: that Excel sometimes flags these issues, but many people simply ignore them as sometimes they generate false positives or become annoying so they just get ignored.</p>
<p>Below are some more examples of what these test results would look like in terms of formula issues and errors, including risk areas like external links.</p>
<p>Understanding the flow of formulas and numbers in a spreadsheet or model is also often very difficult without your friendly doctor taking a closer look at it.</p>
<h3>Where are good places (links) to find out more on the topic?</h3>
<p>Here is a list of links which are useful to those readers wanting to develop a healthy relationship with Excel and avoid those problematic areas of errors:</p>
<ul><li><a href="https://www.modelcitizn.com/acctechlive2019" target="_blank" rel="noopener noreferrer">AccountechLive 2019</a> – Mastering Errors in Excel - Keep the Roses, Avoid the Thorns</li></ul>
<p>Other relevant articles in this series that can keep you nice and healthy:</p>
<ul><li><a href="https://www.linkedin.com/pulse/financial-model-development-lance-rubin/" target="_blank" rel="noopener noreferrer">Financial Model Development</a>– co-authored by David Thompson</li>
<li><a href="https://www.linkedin.com/pulse/user-friendliness-financial-modelling-lance-rubin/" target="_blank" rel="noopener noreferrer">User Friendliness in Financial Modelling</a> – co-authored by David Thompson</li>
<li><a href="https://www.linkedin.com/pulse/workbook-structure-hyperlinks-financial-models-lance-rubin/" target="_blank" rel="noopener noreferrer">Workbook Structure and Hyperlinks for Financial Models</a> - co-authored with Jennifer Harrison</li>
<li><a href="https://www.linkedin.com/pulse/best-practice-formula-construction-financial-modelling-lance-rubin/" target="_blank" rel="noopener noreferrer">Best Practice Formula Construction for Financial Modelling</a> – co-authored with Jennifer Harrison</li></ul>
<h3>How important is this skill in the context of learning financial modelling?</h3>
<p>The fact remains that all professional financial modellers and financial modelling firms recognise that as humans when we write formulas and code up any spreadsheet our creation of errors is inevitable.</p>
<p>In order to master the art of financial modelling we have to master the art of specifically focusing on preventing and trapping these errors and also design formulas and structure the workbook to greatly reduce this risk.</p>
<p>If you want to consider yourself as having robust financial modelling skills, then handling errors is a MUST have skill.</p>
<p>Not just post fact, but before, during and after building any model this must be front of mind.</p>
<p>The skill of error prevention and detection is vital, there is no other way of saying it.</p>
<h3>How does all this disruption, AI and Automation talk impact this topic?</h3>
<p>Whilst there are certainly software packages that can do some really great heavy lifting of error detection and reporting like ExcelAnalyzer and other similar tools, there is still a need for a human to interpret what impact that error might have.</p>
<p>The balance sheet check error seen above will not be detectible unless you specifically force an error creation for an imbalance so that the software can pick up the cell specifically.</p>
<p>If the logic of how a business makes money is out of sync with reality, its only the human that will be able to see this through the outputs or other cross checking over time when the actual results do not reconcile with the forecast.</p>
<p>Our role in error detection needs to change and evolve, like all things when it comes to AI and automation, to being the interpreter of the error vs manually hunting them (unless we are required to do so as part of an audit).</p>
<p>If you want to find out more and follow the rest of the article series be sure to download the <a href="https://fmwiki.glideapp.io/" target="_blank" rel="noopener noreferrer">Financial Modelling App</a></p>
<p>If you want to find more information on financial modelling and content visit the <a href="https://www.modelcitizn.com/" target="_blank" rel="noopener noreferrer">Model Citizn website</a>.</p>`,
  },
  {
    title: "How Dynamic Arrays Will Revolutionise Financial Modelling",
    slug: "how-dynamic-arrays-are-revolutionising-financial-modelling",
    author: "Lance Rubin",
    coauthor: "Jeff Robson (Access Analytic)",
    date: "2023-06-01",
    excerpt: `When you see Dynamic Array/s (“DA”) functions, they will blow your mind as you start to think about all the implications for modelling, the countless hours they can save you and the ease with which your models can be ext...`,
    tags: ["Financial Modelling","Excel","Dynamic Arrays"],
    heroType: "grid",
    content: `<h3>Introduction to the co-authors</h3>
<h3>Why did Jeff select the topic and why is he passionate about it?</h3>
<p>When you see Dynamic Array/s (“DA”) functions, they will blow your mind as you start to think about all the implications for modelling, the countless hours they can save you and the ease with which your models can be extended and adapted.</p>
<h3>Topic and context setting</h3>
<p>DA formulas are self-replicating and can reference all the values in a table throughout the entire workbook.</p>
<p>This makes them perfectly suited for financial modelling as they allow the modeller to rapidly build robust models that can be easily extended (horizontally and vertically) and still comply with financial modelling best practices.</p>
<p>Financial modellers who adopt DA will become more productive by building more reliable models more quickly as a result of significantly less formulas and therefore the risk of errors is greatly reduced.</p>
<h3>If you had to teach this topic in a school to kids what key tips would you give them to focus on</h3>
<p>So let’s assume for the moment that school kids don’t even have Excel or Google Sheets, which in reality is probably unlikely as most have started to use these tools but at a basic level only.</p>
<p>Picture for a moment that you need to build one of those really complex Lego Technic constructions like the Porsche 911 RSR below.</p>
<p>Let’s say it will take a kid ordinarily a few hours (assuming no adult assistance) to finish. Great idea for those in lockdown during COVID19 epidemic.</p>
<p>Perhaps with some adult assistance this could go down to say less than an hour and with a lego master perhaps less again to assemble the 1,580 pieces. But it’s unlikely that this could be built by any human in say under 1 minute for so many pieces that are joined together in a complex set of instructions.</p>
<p>Well, for most financial modellers this is exactly what is required to build a model. Following a set of instructions (best practices) and connecting all the pieces together to ensure that the overall model works as intended.</p>
<p>But what if the number of parts (think formulas in a spreadsheet) where reduced from say 1,580 pieces to just 15 pre-assembled blocks that required you to simply connect the blocks together or fill in the assumptions once assembled.</p>
<p>Your time to build the car would easily go down on this basis from hours to minutes or even seconds.</p>
<p>This is fundamentally what DA allows you to do.</p>
<p>By building Excel tables and using the 7 core DA functions you can build models and re-use the formulas and structure (content) in the model to rapidly expand it for re-use in minutes or seconds even.</p>
<p>But you first need to keep an open mind as the formulas used are not like anything you have seen before, but then again you wouldn’t expect anything less from something so powerful and new.</p>
<p>Once you start to play with the tables and functions you will start to see what is possible and how powerful DA can be.</p>
<h3>What practical steps can people take now to learn more?</h3>
<p>Firstly ensure you have access to an up-to-date version of Excel (Office 365: Insider or Monthly channel preferably). If you don’t have the latest version don’t even bother as you simply won’t be able to use the functions as the workbook will simply be full of errors.</p>
<p>If your clients or stakeholders are not on the same version of Excel then be careful using DA as they will not be able to use it.</p>
<p>Find out more using the details below by downloading and use other people’s models to understand how it works. Copying other people is the best way to understand how things work.</p>
<p>Both Jeff and Lance have provided links below to webinars, content and other useful resources that can help you get started.</p>
<h3>Where are good places (links) to find out more on the topic?</h3>
<p>Learn about DA from online resources like YouTube and blog articles. Here are links of some specific useful tips and videos you can start on:</p>
<ul><li>Don Tomoff’s collection – <a href="https://medium.com/lets-excel/ms-excel-introducing-dynamic-arrays-and-functions-available-early-2019-in-office-365-819b62621908" target="_blank" rel="noopener noreferrer">MS Excel — Introducing Dynamic Arrays and Functions (Available Early 2019 in Office 365)</a></li>
<li>Joe Mcdaid - <a href="https://www.youtube.com/watch?v=8hO0g1wK6u4" target="_blank" rel="noopener noreferrer">Inside Excel - Episode 4: Dynamic Arrays</a></li>
<li>Jeff’s webinar hosted by Danielle Stein Fairhurst - <a href="https://www.youtube.com/watch?v=pTLEiy0_ngc" target="_blank" rel="noopener noreferrer">Building a Financial Model with New Dynamic Array Functions</a></li>
<li>Jeff’s article –<a href="https://accessanalytic.com.au/corkscrew-calculations-using-dynamic-array-functions/" target="_blank" rel="noopener noreferrer">Corkscrew Calculations using Dynamic Arrays</a></li>
<li>Lance’s webinar hosted by Danielle Stein Fairhurst - <a href="https://www.youtube.com/watch?v=LN6CQu-q1B0" target="_blank" rel="noopener noreferrer">Scenario Modelling for COVID-19 Uncertainty using Dynamic Arrays</a> including <a href="https://www.youtube.com/watch?v=1lMlDfuN-zQ" target="_blank" rel="noopener noreferrer">how DA work neatly with PowerBI</a>.</li>
<li>Lance shares a recently published DA model connected to PowerBI - <a href="https://www.eloquens.com/tool/bbxAfdLn/engineering/dynamic-arrays-best-practices/powerful-dynamic-arrays-model-with-monte-carlo-simulation" target="_blank" rel="noopener noreferrer">Powerful Dynamic Arrays Model with Monte Carlo Simulation</a></li></ul>
<h3>How important is this skill in the context of learning financial modelling?</h3>
<p>At the time of writing this article very few models will contain these functions because they have only recently been released into the “mainstream” and are therefore very new.</p>
<p>However, as the functions become more widely known, adopted and mature, they will become a critical method for constructing financial models at speed and higher accuracy (lower risk).</p>
<p>Errors in financial models has long been the excuse many use (especially those Excel haters out there) to avoid using Excel as a technology solution. With DA potentially significantly reducing error rates this is game changing.</p>
<p>Financial modellers who are looking to not only maintain their skills but also keep pace with the every evolving technology enhancements in financial modelling would be well placed to learn how to apply DA to their models.</p>
<h3>How does all this disruption, AI and Automation talk impact this topic?</h3>
<p>Currently, the disruption and automation in Financial Modelling is just beginning. We both encourage everyone to get on board and begin to learn about these topics and innovations so that they are ready to take advantage of the functions when these become more mainstream and avoid obsolescence.</p>
<p>If you want to find out more and follow the rest of the article series be sure to download the <a href="https://fmwiki.glideapp.io/" target="_blank" rel="noopener noreferrer">Financial Modelling App</a></p>
<p>If you want to find more information on financial modelling and content visit the <a href="https://www.modelcitizn.com/" target="_blank" rel="noopener noreferrer">Model Citizn website</a>.</p>`,
  },
  {
    title: "Virtual CFO: The Good, Bad and the Ugly",
    slug: "virtual-cfo-the-good-bad-and-the-ugly",
    author: "Lance Rubin",
    coauthor: null,
    date: "2023-01-03",
    excerpt: `18 months ago I jumped into a portfolio career by being a permanent part time CFO for Banjo (start-up fintech lender) whilst launching my own financial modeling consulting business, Model Citizn....`,
    tags: ["Financial Modelling","Virtual CFO","Career"],
    heroType: "balance",
    content: `<h3>Background</h3>
<p>18 months ago I jumped into a portfolio career by being a permanent part time CFO for Banjo (start-up fintech lender) whilst launching my own financial modeling consulting business, <a href="http://www.modelcitizn.com/" target="_blank" rel="noopener noreferrer">Model Citizn</a>.</p>
<p>I didn’t even realise the term virtual CFO existed until I transformed myself into one by turning a permanent part time CFO role of 3 days a week into 3 days a month. I then started to take on more startup clients who were looking for a strategic financial modeler and Virtual CFO (VCFO). The word VCFO doesn’t really convey the value or the cost, but for moment its the term used in the industry.</p>
<p>The journey of transformation from corporate into a VCFO was certainly exciting but also filled with failure, lots of stress and rebuilding following those failures.</p>
<p>A quick word of advice, if you think you can easily transition from 1 employer to multiple “employers” (also known as clients) easily and quickly (ie less than 6 months) you are kidding yourself.</p>
<p>It sounds nice and easy at first blush doing it yourself, but it will never be a scalable business of more than 1 immediately and therein lines the challenge.</p>
<h3>Building it and what I learnt</h3>
<p>There are a couple of key ingredients to building a scalable VCFO business model. In the end, if your business is not scalable it’s not saleable and worse if you get sick or injured it’s worthless and all your hard work and clients will be lost.</p>
<p>These are the sort of things you need to consider when diving into this growing niche space that has huge potential. Build it around the Power of One will turn into the Power of None unless you consider the following:</p>
<strong>How much time are you working on vs in the business?</strong>
<p>In the beginning most of your time will be spent on your business whilst also juggling client work within it. This can cause extra stress, huge opportunity cost and a somewhat clunky end to end process for your clients as you figure stuff out. As you start to iron out flaws in the operations, technology solutions you have chosen or need to choose and of course the big one business development and marketing. This is more than just a blog email but far deeper and valuable insights and connections.</p>
<strong>The technology you choose or experiments you undertake are critical</strong>.
<p>There are fundamentally 3 key groups of systems to consider namely CRM/business development, operations/client services/delivery and of course your own administration and accounting. Choose the right apps that all integrate or mostly integrate is key to making a seamless transition and smooth customer experience. You also need to invest time in exploring new technologies as they become available. We used 3 different CRM systems till we found the right one for us, it cost a lot of lost customer time, but would have been even worse if we hadn’t found the right solution.</p>
<strong>Build a strong brand presence and ensure you are well positioned dynamically</strong>.
<p>Dynamic brand positioning is extremely important. This means changing and evolving your methods and products. I started out with 1 single revenue stream and this has now evolved to 6. As competition enters the market and more VCFOs join this game changing opportunity, how will you differentiate your services and remain competitive? How can you ensure your clients are getting the best value? What if your largest client got bought out? Are you a leader or a follower? What are your competitors views of you in the market? How are you helping the broader industry progress?</p>
<strong>What is your why?</strong>
<p>Not your what (stuff you do) or your how (process to do it)? This cannot be about you or why you created the business but why do customers choose you? For Model Citizn we help clients get control and simplify their businesses by making relevant, informed and purposeful decisions with insight. Some if this also has links to broader social and health issues e.g. social benefit bonds. This is at the centre of everything we do. We want to help and enable people and businesses to succeed.</p>
<strong>Do you have staff helping you?</strong>
<p>Are you spending your precious time in the most important areas of your business. This will change as your business changes and you need to be agile. It’s taken me 12 months before I hired my virtual assistant. I wish I had done it sooner. It has taken me 18 months to finally be confident in building the best team around me. Now I need to build it. The opportunity cost of these delays meant that on many occasions my time was not being spent on the most valuable thing (working with current customers and finding new ones).</p>
<p>So let’s quickly sum this up into 3 headings.</p>
<h3>The Good</h3>
<ul><li>diversified income/reduced salary concentration risk,</li>
<li>uncapped earning potential,</li>
<li>cross industry exposure,</li>
<li>explore the latest technology,</li>
<li>learn about the ever evolving world of digital and social marketing (email blogs are so last century)</li>
<li>working with startups that are hungry and desperate to get to break even, deeply understand the drivers of value and want to simplify their business to focus on value creation and exit.</li>
<li>opportunity to build a saleable business asset (if you structure your VCFO business properly).</li>
<li>Work life balance is absolutely achievable as you get to define what that means for you, not just some square box HR policy. I was at virtually all of my son’s footy practices and games every week (2 times a week) for the entire season. I was one of only 2–3 dads that did this (excluding coaches) as the rest had corporate jobs or were partners in large firms. They may have earned more than me for that year, but I was reaping other benefits they could never have. Defining your own work life balance is gold.</li>
<li>When the business becomes scalable and you have staff life really begins and the transformation is complete.</li></ul>
<h3>Bad</h3>
<ul><li>much longer hours than corporate including late nights and weekends until the business is well established.</li>
<li>Until you build the business properly you can feeling like the harder you work the further and further away you are from achieving that work life balance you sold to yourself and your family.</li>
<li>Technology rabbit holes can put you into a time warp of wheel spinning. Playing with a new toy might seem like fun but will it add value to the customer or just be cool or nice to have?</li></ul>
<h3>Ugly</h3>
<ul><li>The opportunity cost of building a scalable business from scratch takes significantly longer than expected, in my case 18 months</li>
<li>Less time working on vs in the business.</li>
<li>Power of One is the power of None.</li>
<li>Risk of failure and burnout trying to repair an aeroplane whilst in-flight is dangerous, so why do you do it that way?</li>
<li>Client concentration risk and switching from 1 demanding employer to many.</li></ul>
<p>If I had my time over what would I do differently knowing the above.</p>
<ul><li>Get infrastructure setup day 1 to focus on acquiring and servicing clients to maximise revenue and remove huge opportunity cost of building a business at the same time as running it. It takes far longer than I ever imagined. Some people also never get to start life ie scalable business model ever and drown trying.</li>
<li>Buy into or acquire an existing business or franchise that has done the hard yards for you. There are never any guarantees on success but I can guarantee your failure risk will be dramatically reduced this way. I came close to failure and wish I had this option available when I started. Buying in means you can easily sell out of the business later on as it was the infrastrucutre setup to go .</li>
<li>Ensure the business is scalable to cope with more client leads. As you grow, by building a stronger brand, more people will want you and you will need to deliver superior services to them all. This is simply not possible on your own. I had to turn away opportunities on a number of occasions as I was too busy.</li>
<li>Hire my virtual assistant much earlier than I did, she would have saved me a lot more time and money through lost opportunities.</li></ul>
<p>If you are sitting at a cross roads right now wondering why on earth you became a VCFO and struggling with some of the things I mentioned reach out and connect.</p>
<p>I am always keen to meet new people and help more businesses gain the much needed insight and strategic thinking we can offer them.</p>`,
  },
  {
    title: "SaaS Financial Modelling",
    slug: "saas-financial-modelling",
    author: "Lance Rubin",
    coauthor: "Chironjit",
    date: "2022-12-05",
    excerpt: `Chironjit is a Chartered Management Accountant with over a decade of experience in financial and management accounting. He also holds a Masters of Banking and Finance from Macquarie University....`,
    tags: ["Financial Modelling","SaaS","Error Checking"],
    heroType: "chart",
    content: `<h3>Introduction to the Co-author</h3>
<p>Chironjit is a Chartered Management Accountant with over a decade of experience in financial and management accounting. He also holds a Masters of Banking and Finance from Macquarie University.</p>
<p>He has worked in enterprises small and large, including FTSE 100 companies to small start-ups and not-for-profits. He is currently the co-founder of a retail tech start-up looking to combat counterfeits of consumer goods.</p>
<h3>Why did Chironjit select the topic and why is he passionate about it?</h3>
<p>Every business, from a small start-up to a large enterprise, needs some form of a financial model to guide them through their finances, as well as track key performance metrics.</p>
<p>Service subscription (i.e., X-as-a-service in general and SaaS in specific for software-as-a-service model) companies rely on a subscription model to generate revenue, as opposed to traditional product sales.</p>
<p>Like other industries, there is no one-size-fits-all model for SaaS companies. For example, there are two common types of subscription specifically licence subscription (fixed) and pay-as-you-use subscription.</p>
<p>Licence subscription is generally what we commonly see in most popular SaaS software (e.g Microsoft Office 365), where in actuality you are purchasing the right to use the software for a given time. Pay-as-you-use models meanwhile are based on actual usage. An example of this is Amazon Web Services, where you pay only the amount of computing power you use.</p>
<p>Assumptions and underlying revenue / profit / industry drivers do differ from one company to the next. In my case, I first started looking into it when I joined a start-up and had to come up with the first set of models to present to potential investors.</p>
<p>Service subscription models are increasingly prevalent as they are viewed by investors as being a more sustainable business model as they allow the company to have a recurring revenue stream that is less volatile.</p>
<p>Margins are also perceived to be particularly lucrative (70-80 percent gross margin) for SaaS businesses. The bulk of the cost tends to be fixed, hence driving down the cost-per-customer with every increase in the number of users.</p>
<p>This subscription model has been primarily popularised by start-ups but is     also seen by customers as being more attractive as costs for the service are paid on a monthly basis as opposed to a lump sum up-front.</p>
<p>The popularity of this model has meant more and more businesses that may have operated as traditional companies (such as software companies selling software bundles / licenses, law firms selling services, etc) are also switching over to subscription style offerings to capture the benefit of customers and also the attractive valuation multiples they could get as a scalable sustainable business.</p>
<h3>Topic and Context in a few sentences</h3>
<p>SaaS modelling involves financial models that account for software-as-a-service business models. The primary differentiator to a conventional / traditional business model is that the revenue per customer is generally recurring under some form of subscription-based revenue.</p>
<p>This presents some challenges as the cost sometimes cannot be front-loaded or priced in directly for all products, especially when this cost relates to the development of the technology which underpins the value proposition.</p>
<p>Customer Acquisition Cost (CAC) and Long Term Value (LTV)</p>
<p>Rather, pricing has to be determined based on metrics like acquisition costs (more commonly known as Customer Acquisition Cost or CAC) and the expected value over the lifetime of the customer (also known as Lifetime Value or LTV) to the business.</p>
<p>Factors such as customer churn, tiered pricing, and secondary value (such as from the monetisation of data) have to be taken into account as well when trying to build a SaaS financial model.</p>
<p>The CAC and LTV are often cited as the two most important metrics to track for start-ups. The key focus is the multiple by which LTV exceeds CAC ie how much value is generated per customer over the cost of acquiring that customer.</p>
<p>A LTV/CAC ratio of at least two times would be a minimum depending on the stage of the business. CAC doesn’t include all the costs of the business, so LTV needs to exceed CAC by multiples.</p>
<p>In general, they provide a good indication of whether the product / service being sold is or can be truly profitable. You can also use these two metrics to determine the price of your service.</p>
<p>The CAC is a measure of the amount spent to acquire your customers, and this primarily relates to advertising and marketing costs that the company incurs to acquire customers.</p>
<p>This value can and will be different depending on the sales type and channel. For example, utilising online advertising as a sales channel will yield you a different acquisition cost from utilising sales development (ie hiring and using a sales team).</p>
<p>The LTV is generally calculated from the expected value (the subscription fee or sales price, say per month) multiplied by the expected amount of time (number of months) you expect the average customer to stay with you.</p>
<p>While the lifetime of a customer using your service will differ from industry to industry, there are averages you can deduce (or straight up find online) for different industries.</p>
<p>Internally and most accurate, you can use your own customer data to determine how long the average customer stays with you and when they leave.</p>
<p>Similar to when staff leave an organisation this is referred to as turnover or in the case of customers the rate of churn over a lifetime of that customer. For example, if 1% of your customers leave every month, what would the expected turnover be for the whole set?</p>
<p>Importantly as mentioned above, your CAC should be lower than the LTV for the product / service for your business to achieve cash flow break-even  and eventually profitability at scale. This may also help you determine the price.</p>
<p>If your acquisition cost is high, and you have a known average customer retention rate, then your pricing should be high enough to be able to cover the CAC and contribute to covering the remaining business expenses that are not included in CAC (e.g. non-sales related salaries, rent, admin expenses etc).</p>
<p>It’s often the case that SaaS businesses remain unprofitable for a number of years before they achieve break-even and scale to cover in excess of the total business expenses.</p>
<p>What about those other expenses? As these are apportioned indirectly, the general way of accounting for this tends to follow more traditional aspects of modelling fixed operating or administration expenses and therefore often excluded from CAC.</p>
<p>If you find that the market cannot support both your price for your product/service and low churn rate i.e. your expected LTV, then there may be an issue with the product strategy or the business viability.</p>
<p>If you are in a start-up, or using the financial model to raise funds, other aspects do have to be included when building the models.</p>
<p>It goes without saying that the financial model should be a 3-way including an Income Statement, Balance Sheet and Cash Flow Statement, but depending on the business maturity,  expense appetite and in-house skills to build it this may not be possible. The founders may opt for a more cash-flow only or revenue based financial model, but this comes with certain risks.</p>
<p>Capitalisation Table (Cap Table)</p>
<p>The other key aspect of any modelling is the inclusion of the Capitalisation Table (aka Cap Table) and the valuation metric (price per share) for current and incoming investors including staff who may have access to the employee share option plan (ESOP).</p>
<p>Cap Tables are a basic table indicating number of shares, price per share at various times and the % ownership which changes over time effectively also known as dilution.</p>
<p>The complexity of this table would depend on factors such as share structure, convertible notes, dilution (e.g. diluting interests such as options    ), discounts     and such. In general, there are also columns for pre-and post-raise/money, as most investors would like to see the level of shareholding once all factors have been taken into account once they have invested.</p>
<p>Depending on the price for the shares at each point in time (commonly known as a round), if the price goes up it is called an up-round and if it goes down it’s a down-round. Down rounds may indicate some issues with either the company’s ability to raise capital based on the market demand or some fundamental issues with their business model. Below is an example of a Cap Table for pre and post raise.</p>
<p>The factors that determine the share price (which at this stage is generally unlisted) is a combination of traditional valuation methodologies and other industry specific methods.</p>
<p>The valuation for companies under the traditional sense generally use 2 methods i.e. discounted cash flows (DCF) and enterprise value (EV) multiples, also known as EBITDA multiples.</p>
<p>If you want to understand more about valuations read the previous article in the series which explores all the different types of methods and is certainly a topic in and of itself, but in general, this is how investors know how much the company is worth, and so the expectation would be for this to be included (even if some may choose to do their own analysis).</p>
<p>The other industry specific valuation metrics (which would be combined with, but ideally not replace the above) have been born out of the SaaS business models and M&A transactions developed over recent times. For example a fintech lending company may be valued based on its price to loan book, price to cumulative loans written or revenue multiples.</p>
<p>Whilst the other industry based methods are useful for comparison to recent transactions, as the financial modeller you need to be careful at simply relying on any one method and ideally have a range of methods which you then do a weighted average for the most accurate blend of valuations.</p>
<h3>If you had to teach this topic in a class to school kids, what key tips would you give them to focus on?</h3>
<p>I think the easiest way to describe an X-as-a-service model is to imagine that you are in the business of loyalty. You make something that a customer uses regularly, and your expectation is that you may not make money from the customer upfront (like selling a product off the shelf) but over the course of the customers’ lifetime you will.</p>
<p>Think about the games you are playing for “free” on your iPad, tablets, Xbox or PlayStation. They are free because over time they draw you into purchasing some additional skins, powers, credits, tokens etc. They lure you in and get you addicted then you want to succeed and continue playing by spending money. This is much the same for SaaS business models which rely on a great user experience to keep customers “addicted” to their products.</p>
<p>Your incentive is to make products in ways that a customer would want and feel the need to use regularly. Of course, this may be misused (for example, companies tweaking the service to drive abusive or addictive behaviour, and thus higher usage).</p>
<p>It must be noted that this is not an entirely alien concept in traditional retail. In retail, there are often ways to replicate certain aspects of it through loyalty campaigns, coupons or loss leaders (sell something at a loss to get the customer to come in and possibly buy more or repeatedly to make up for that initial loss).</p>
<p>A common one is 2 for the price of 1. It might seem crazy to sell a product at half its price, but it could potentially triple your sales volume and make back the lost profit.</p>
<h3>What practical steps can people take now to learn more?</h3>
<p>Google is an awesome place to start.</p>
<p>You will find some free examples, both by finance professionals and by start-ups. There are also good paid templates and examples for learning, and if this is something you are focused on, it may be helpful to get some of these. There are plenty of examples of Cap Tables available.</p>
<p>If you are from a non-finance background, the best place would be to read up a little on the basics, find a template that looks suitable and then start working from there.</p>
<p>As mentioned in prior articles reviewing other people’s financial models is a great way to understand their thinking and logic.</p>
<p>This will likely suffice in the initial rounds of capital raising as it’s not as important to have robust financials but more importantly is a compelling story, a minimal viable product (MVP) with actual examples of paying customers.</p>
<p>It is likely more important to the investor that you have the basic understanding of your inflows, outflows and the key metrics of growth (which is usually mainly revenue, CAC & LTV).</p>
<p>You cannot get away from having a Cap Table so make sure you have this at the very least as this will be critical at the point when investors part with their money.</p>
<p>In later raises, it may help (or even be necessary) to get professional help in building more fine-tuned or complex 3-way financial models.</p>
<h3>Where are good places (links) to find out more on the topic?</h3>
<p>Two that Chironjit recommends are here:</p>
<a href="https://baremetrics.com/blog/saas-financial-model" target="_blank" rel="noopener noreferrer">https://baremetrics.com/blog/SaaS-financial-model</a>
<a href="http://christophjanz.blogspot.com/2016/03/saas-financial-plan-20.html" target="_blank" rel="noopener noreferrer">http://christophjanz.blogspot.com/2016/03/SaaS-financial-plan-20.html</a>
<p>Another option for finance professionals may include <a href="http://www.corporatefinanceinstitute.com/" target="_blank" rel="noopener noreferrer">Corporate Finance Institute(CFI)</a>or the <a href="https://www.fminstitute.com/" target="_blank" rel="noopener noreferrer">Financial Modelling Institute (FMI)</a>.</p>
<p>If you’re keen to try out a CAC or LTV calculator, this may be a place to get some quick numbers:</p>
<https://www.cenario.co/free-ads-spend-calculator>
<p>If you visit Eloquens they have an entire category dedicated to SaaS models.</p>
<a href="https://www.eloquens.com/category/startups/software-as-a-service-saas/78" target="_blank" rel="noopener noreferrer">https://www.eloquens.com/category/startups/software-as-a-service-SaaS/78</a>
<h3>How important is this skill in the context of learning Financial Modelling?</h3>
<p>In general, if you intend to be in the start-up industry, you will have to know it. But general skills play a more important role.</p>
<p>To be a great financial modeller you need to be a great model auditor, and a great model auditor needs to have had the experience of specifying, designing, building and delivering a financial model.</p>
<p>If you are already good at building a particular type of model, you should not have trouble getting comfortable with SaaS modelling. After all, the basic tenets of finance still apply.</p>
<h3>How does all this disruption, AI and Automation talk impact this topic?</h3>
<p>There has been increasing attempts to automate the process of forecasting and managing financial metrics. However, the primary issue is that every start-up is slightly different and drivers to revenue and costs may be very different. Hence building cookie-cutter models are not something that works in most cases.</p>
<p>It is not likely that AI will significantly change this in the short or medium term, for 2 main reasons: firstly, most real models are actually kept private, and getting access to the volume of data needed is relatively hard; second, the models vary widely, especially in assumptions, drivers to revenue / costs, share structure, depreciation and taxation.</p>`,
  },
  {
    title: "Fundamentals of 3-Way Cashflow Modelling",
    slug: "fundamentals-of-3-way-cashflow-modelling",
    author: "Lance Rubin",
    coauthor: null,
    date: "2022-11-03",
    excerpt: `Furqan Baig (“Furqan”) has historically been working in a range of different sectors from manufacturing and production of textiles, Real Estate Management and Investments as a business consultant and accountant....`,
    tags: ["Financial Modelling","Excel","Error Checking"],
    heroType: "flow",
    content: `<h3>Introduction to the Co-author</h3>
<p>Furqan Baig (“Furqan”) has historically been working in a range of different sectors from manufacturing and production of textiles, Real Estate Management and Investments as a business consultant and accountant.</p>
<p>Furqan, from the humble but bustling Dundee in Scotland is now the managing director at Instruo Accountants and has taken the leap to join the gig economy.</p>
<p>At Instruo he aspires to nurture a culture of interaction, learning and educating together with businesses, bookkeepers and accountants.</p>
<p>He does this through the use of technology and the human touch, in today’s technology driven world.</p>
<h3>Why did Furqan select the topic and why is he passionate about it?</h3>
<p>It is a topic of great interest, as it can give us very accurate data about changes in our “cash situation” (net cash flow).</p>
<p>We base our forecasts on assumptions, for example we may have to “account” for the changes in working capital or net working capital.</p>
<p>Having used these techniques within a manufacturing environment previously, they have provided me with the results needed to find meaningful insights in relation to the business and its cash demands and future cash position.</p>
<p>Insights driven by the impact made on the numbers (including the key drivers), we can then begin to understand better the “behaviours” of the change in a business.</p>
<p>The subsequent effects of changes in business on the future for example seasonal changes, inflows and outflows of cash and realising our working capital could help us with better decision making and “adding more value” for us.</p>
<p>For example answering some of these important questions business owners might have:</p>
<ul><li>Is it possible to reduce time taken for payments to be received and what impact would that have?</li>
<li>Could the inventory “turn-around” time be reduced, and inventory converted into cash?</li>
<li>How would the above affect our growth and cash?</li></ul>
<p>Lack of such information to answer these questions and lengthy reporting cycle times are not allowing us to foresee or change processes in order to help the business generate cash needed for future growth targets.</p>
<p>Once we better understand the tweaks required in the drivers we were able to ensure those changes are reflected accurately in the 3-way financial model we have created and test those new assumptions.</p>
<p>We will be able to make the decisions and therefore the outcomes faster and more efficiently than before.</p>
<p>It can result in substantial changes in the cashflow of the company which is desperately needed for its survival, competition and development opportunities.</p>
<p>These opportunities often provide benefits beyond the business itself, but other areas on the balanced scorecard, such as community and environment.</p>
<p>The fundamentals of 3-way cashflow modelling is essential to helping to achieve these goals and are key tools needed for businesses both small and large, to foresee “easier” and respectively “harder” times ahead of time.</p>
<p>It will also help to foster business resilience and development, through managing its cash effectively and efficiently.</p>
<h3>Describe the Topic and Context in only a few sentences</h3>
<p>The fundamentals of 3-way cash flow modelling is often also referred to as the use of 3-way models that include the 3 financial statements that are all integrated through formulas and assumptions.</p>
<p>The 3 financial statements are the Income Statement, Balance Sheet and the Cashflow Statement.</p>
<p>They provide a significantly higher level of accuracy into the net changes in the cash position, year on year vs the simplified approach of opening and close cashflow basis only and which is why banks won’t rely on models for large funding unless they are 3-way.</p>
<p>A 3-way cashflow model allows us to accurately forecast the year on year changes on the balance sheet and analyse deeply, the changes on the profit and loss and cash flow from historical and forecast information that is more accurate than simply looking at the cashflow or the income statement on a standalone basis.</p>
<p>We’ll be looking closely at assumptions made in 3-way cashflow models and how these assumptions impact our forecasting.</p>
<p>It’s important to check for discrepancies in our assumptions when compared to reality and whether our strategy still makes sense or do we need to revisit the fundamental business model as it might be unsustainable, based on the initial set of assumptions being incorrect or unrealistic.</p>
<h3>If you had to teach this topic in a class to school kids, what key tips would you give them to focus on?</h3>
<p>The key focus for those less familiar with 3-way modelling is to focus on areas where discrepancies (think mistakes) can often exist.</p>
<p>These may be in reference to our inventories (think widgets we are selling, maybe slime or lemonade) are recorded inaccurately or items unrecorded (think stashed in your parents pantry and you didn’t know about it) due to manual errors or due to internal controls (think of your parent’s house rules).</p>
<p>There may be discrepancies in currency fluctuations if you are trading internationally (think of buying slime ingredients on Ebay from overseas and prices change constantly), which are wrongly calculated (your parents see what it actually costs on their credit card vs what you told them).</p>
<p>There could also be fluctuations in the price of glitter, activator, colours and fragrance materials, depending on the type of stock you are purchasing (apparently there is a high demand for slime globally at the moment).</p>
<p>Furthermore, changes can differ depending on what our business objective might be and impact other aspects. i.e. maybe we start buying or selling in Amazon and not Ebay, or both.</p>
<p>The financial model will help us develop and shape (like clay and slime) those decisions and assumptions.</p>
<p>We therefore need to make some assumptions which are a combination of numbers and calculations, examples include;</p>
<ul><li>What is the current and future growth percentage of volume of sales (number of slime kits we are selling or going to sell)?</li>
<li>What does each slime kit cost as a percentage of the revenue ie what is our cost of goods sold?</li>
<li>What other costs might be involved in those slime kits which we cannot physically see like the kitchen space we are using, the electricity or our own labour time (when we should be doing homework) as percentage of revenue? These are often referred to as operational or capital expenditure and are part of the overall profit calculation.</li>
<li>How long is it taking for the company to receive cash for its inventory after making a sale (how quickly can we use the cash to go watch movies or buy video games)?</li>
<li>What is the time frame on supplier payments, can we increase this to retain cash for longer (when does Mom or Dad expect me to pay them for the ingredients we bought)?</li>
<li>For short-term investments, how much cash have we retained from “holding onto supplier payments for longer? – longer credit terms. Can we convince your parents to get paid once we have sold 12 slime kits not just the first one?)</li>
<li>Are we generating cash faster than before? – what is the ratio between our annual sales and the average working capital over 12/18 months? (are we getting our cash sales quicker than we were when we started selling slime at the beginning?)</li></ul>
<p>Often the reason for modelling is to forecast growth and monitor changes in net working capital (the net amount of how much slime ingredients we own at cost, what we owe people and people owe us).</p>
<p>Understanding and managing all the 3 items (ingredients, owe to people, people owe us) is the key cause of cashflow issues.</p>
<p>It is, in this case, vital, to know the liquidity of cash within the business as there may be an additional “injection” of cash needed to increase working capital (Parents might have to give us more money upfront), which allows us the choose for example purchase a higher amount of inventory (more slime ingredients) or to make supplier payments early for example (if we are trying to negotiate longer credit terms in the future).</p>
<p>This is an example of how we would ensure that working capital is sustained and the cash conversion cycle can continue at its “most efficient” level.</p>
<p>Capital for new machinery may need to be bought as a replacement or help us grow the business to produce more slime. It’s also possible that skilled workforce may be needed at a moment’s notice (maybe your brother or sister can help you). In this case it would be necessary to have liquid cash available for sudden capital or operational expenditure.</p>
<p>So it’s important to be looking at all of these items; sales, working capital, operational and capital expenditure in a strategic way (in the future, not just now).</p>
<p>As a result, your slime company will save cash outflows (payments to your parents) and create inflows (from your customers) quicker and retain cash for longer (so you can buy cool stuff).</p>
<p>This is why, it is important to understand the outcomes of our decisions to reach our objectives and the assumptions we are using in those decisions to understand it all in an accurate way through “the numbers”.</p>
<p>We will ensure that our 3-way model is being used in the most insightful way when combining all the different items listed and help us make a positive impact in the slime (or any) business and ensure accuracy and efficiency of cashflows.</p>
<h3>What practical steps can people take now to learn more?</h3>
<p>So let’s get a little more technical now. The following steps should not be undertaken by children and require adult supervision:</p>
<ul><li>If you think the Cashflow Statement and the Income Statement are the most important you are wrong.</li>
<li>If your Balance Sheet doesn’t balance or you don’t have a Balance Sheet (a fudged Balance Sheet is kinda like not having one so don’t do force balance it) to begin with how do you know that that other two are accurate? Answer – you don’t!</li>
<li>Revenue is vanity, Profit is sanity, but Cash is King (or Queen I was told), but the Joker is on you if you don’t have a Balance Sheet in your model (yes and it balances without a fudge factor).</li>
<li>If you have never built a 3-way model perhaps its time to start. Even a basic one can be found (free downloads) in some of the links below.</li>
<li>You would never believe this one, but crystal-clear understanding of double entry accounting is vital so that you can balance that all important Balance Sheet above. You need to understand how business transactions impact all 3 statements from end to end ie from cost of good or service sold all the way to cash in the bank via working capital of course.</li>
<li>Working capital modelling and understanding debtors, creditors and inventory (for product businesses) is one of the most important aspects of a 3-way model’s operational cashflows. Get this wrong or not sure how to model it and you will be in trouble. The days basis is often the best approach to model working capital which then allows you to see your cash conversion cycle in days.</li>
<li>An often-forgotten area of complexity (when doing just a standalone cashflow or income statements) are the investing and financing cashflows of a business in terms of modelling the full impact of capitalised assets, debt funding tranches and associated impacts.</li>
<li>Practice, practice and more practice until you balance your Balance Sheet. For those that have built a 3-way you would agree that the first model you ever build takes ages. At times it feels like you will never actually get it to balance. I spent 5 hours one late night in an Investment Bank just trying to get the Balance Sheet to balance and having to unpick all aspects and re-connect the Balance Sheet piece by piece. I forgot to start with a Balance Sheet and created it retrospectively. Rookie error.</li>
<li>A few other suggestions might be worth considering:</li></ul>
<ul><li>We can interact with people who have expertise in building these models so that we can ask them relevant questions like why they used the model in the first place?</li>
<li>Using financial models to possibly measure the feasibility of future strategic goals that an organisation may have? i.e. Is it within the company’s means to have big goals which it may not be able to sustain due to the size of it’s cash pocket? I’m sure many of us have been there personally and in business! Build your own personal financial model.</li>
<li>Increasing our working knowledge of software such as Microsoft Excel and Power BI etc. and help with better insight and foresight of assumption to put into our models.</li>
<li>Download models and take a closer look at them to learn more. Many models, including those built by Lance and his team, can also help you learn and understand their design.</li></ul>
<h3>Where are good places (links) to find out more on the topic?</h3>
<ul><li>Useful links include the following:</li>
<li>Models shared by Lance and his team on <a href="https://www.eloquens.com/channel/lance-rubin" target="_blank" rel="noopener noreferrer">Eloquens.com</a></li>
<li>The world’s financial modelling certification program by the <a href="http://www.fminstitute.com/" target="_blank" rel="noopener noreferrer">Financial Modeling Institute</a> which has 3 levels of expertise and require you to build a 3-way model from scratch under exam conditions for level 1.</li>
<li>3-way statement models can be found and learnt to a proficient level by the <a href="https://courses.corporatefinanceinstitute.com/courses/learn-to-build-a-financial-model-in-excel-online" target="_blank" rel="noopener noreferrer">Corporate Finance Institute</a>;</li>
<li><a href="https://instruoaccountants.co.uk/" target="_blank" rel="noopener noreferrer">Book a demo for a chat with Furqan</a> and talk about how me might help you think outside the box.</li></ul>
<h3>How important is this skill in the context of learning FM?</h3>
<p>The skill of having an accurate “cash position” for a business is extremely important, if not its sole purpose and method of survival.</p>
<p>No cash = no business.</p>
<p>For financial modelling, it allows us to create a tool, to equip businesses to see the value in cash management and essentially being educated on the movements of cash within the business and how they are inter-related.</p>
<p>It is a topic which is near and dear to key stakeholders, in any business at times without realising the value of such skills/models.</p>
<p>For this to be reported accurately and faster than before a financial model is the perfect tool for the job of attaining future insights into the liquidity and planning development opportunities for a business.</p>
<p>Financial modelling allows for dynamism in reporting and flexibility in amending and forecasting assumptions and therefore the outcome-driven results achieved, in comparison to non-integrated models (standalone Income Statement and Cash Flows).</p>
<h3>How does all this disruption, AI and Automation talk impact this topic?</h3>
<p>3-way cashflow models can be something that automation is able to achieve, especially when we refer to “hard-coded” numbers, however what software is not able to do, is marry an organisations strategic goals and assumptions of historical or future trends and market conditions in custom built logic and data.</p>
<p>These, arguably, may be judgements, better considered by humans who can interact with each other and “connect the dots” – for example “what is going on around our market?” and “how we might respond to a possible threat.”</p>
<p>Will artificial intelligence be able to “sense” these market related assumptions, such as; X supplier may be going bankrupt, or supplier Y will not have a certain type of supply available to ensure our inventory is sufficient for continued sales?</p>
<p>Customer Z, who is normally great for making payment, is struggling at the moment and needs an additional 30 days to pay, can automation approve this?</p>
<p>Can artificial intelligence make a judgement on the value of goodwill today, and goodwill tomorrow due to changes in market perception, which has heavily affected the value of assets?</p>
<p>Can “What-if” analysis be created entirely through automation and AI?</p>
<p>Possibly for some of the above, however the drivers and outcomes of such assumptions, will always need a human element of judgement, therefore financial modellers/accountants are going to remain in high demand along with the skill of building robust 3-way financial models whilst even leveraging automation and AI to do this better and faster.</p>`,
  },
  {
    title: "Not All Datadear Replacements Are Created Equally",
    slug: "not-all-datadear-replacements-are-created-equally",
    author: "Lance Rubin",
    coauthor: null,
    date: "2022-10-03",
    excerpt: `Fast forward to today and next month (end of October 2022) the data connection is going to be pulled (which was announced a few months ago) leaving many who have not prepared for this event exposed....`,
    tags: ["Financial Modelling","Excel","SaaS"],
    heroType: "compare",
    content: `<h3>Background</h3>
<p>Fast forward to today and next month (end of October 2022) the data connection is going to be pulled (which was announced a few months ago) leaving many who have not prepared for this event exposed.</p>
<p>There has been a massive rise in alternatives to plug this gap since the announcement and whilst it’s great to have options, not all options are the same.</p>
<p>More options = more research and of course, you don’t often know until you actually get into a trial and start using it that you realise it may not really fit the current and future business plans.</p>
<p>The purpose of this article is to help you shortcut that decision and make sure you don’t waste time and money on all the various options for your business and make an informed decision.</p>
<strong>Full disclosure:</strong> Yes we of course offer one of those solutions, but really want to make sure people get through this uncertainty with relatively little disruption and continue to leverage Excel for all its power and ubiquity.
<h3>Factors to consider</h3>
<p>When you start to research alternative options be sure to look out for these factors and make sure you ask the right questions when assessing alternatives.</p>
<p>Below is a summary of these 10 factors that you should be considering in your final decision, particularly if it's a core accounting process that you are running monthly, weekly and maybe even daily in some cases.</p>
<p>We will discuss each of these in more detail below but here is a short checklist:</p>
<ul><li>Intermediary server or data warehouse (that stores your/clients data)</li>
<li>Pull speed of data</li>
<li>Cost</li>
<li>Value-added Excel content</li>
<li>Post-purchase support and training</li>
<li>Push and pull capabilities</li>
<li>Multi-entity consolidation (not aggregation)</li>
<li>Multi-currency handling</li>
<li>Robust spreadsheet tool for modellers and accountants</li>
<li>Data pulled into pre-designed tables or on a single cell formula basis</li></ul>
<h3>1. Intermediary server or data warehouse (that stores your/clients data)</h3>
<p>More recently a number of solution providers who offer a data warehouse and intermediary servers that manage bigger data have started to connect that to Excel. Whilst this is a scalable data solution for “big data”, often this can be a hammer used to crack a walnut when a simpler tool, like Excel standalone, will do fine.</p>
<p>Intermediary servers can add cost, latency and complexity to the data model especially if it’s a cube-based relational database structure and the interface can be less intuitive.</p>
<p>Sometimes you just want the raw tables in Excel without the data model as you might want to build your own data model, relationships or logic.</p>
<h3>2. Pull speed of data</h3>
<p>One of the criticisms we heard from customers and experienced ourselves with DataDear was the slow pull speed that would often hang and even crash Excel. DataDear had an intermediary server and a range of other factors that would have impacted speed.</p>
<p>Also because you are using Excel, you will be limited anyway by the amount it can process. It’s not a database, so don't treat it like one.</p>
<p>So if you are looking to pull 50 entities' profit and loss and balance sheet at the same time on a monthly basis for the past 3 years, you might run into a problem or suggest you make, pour and drink a long coffee in the meantime.</p>
<p>The question is does the process really need to run like that or can it be optimised? If not, you are probably better off with an intermediary server to do that heavy lifting and not using Excel at all.</p>
<p>Excel is pretty good at handling a lot of data especially if you save this as an XLSB format and use Power Query. XLSB files are compressed and run more efficiently and of course there are over 1 million rows in Excel, but you should not be coming close to that or you will have issues.</p>
<p>This is where the intermediary server may be useful, but that brings other challenges as mentioned above.</p>
<h3>3. Cost</h3>
<p>Cost can be a big factor when all you want to do is pull data (hopefully in tables already ie not CSV) into Excel. A data warehouse instance in the background can add to that cost when at times it may not be required.</p>
<p>The cost of transitioning is often ignored and sometimes all you need is a plug-and-play solution directly into Excel with little setup effort.</p>
<p>Make sure you factor all the relevant costs into the transition, at times some of these are hidden and require a lot of your own time to re-engineer or external consulting time to set up.</p>
<h3>4. Value-added Excel content</h3>
<p>Some options in the market provide you with a simple data pull and not a lot more. Others offer you Power BI which is an awesome tool, but formula logic and creative thinking are limited by complexities in DAX and MScript.</p>
<p>No matter what the media or marketers say or think, Excel is not going anywhere and is an awesome tool for reporting, dashboards and modelling. There are also some pretty cool dashboards that can be developed in Excel.</p>
<p>It’s can take a long time and expert skills (which are hard to find) to build these awesome reports, dashboards and models so look carefully if these come with the data pulling capabilities.</p>
<h3>5. Post-purchase support and training</h3>
<p>Do you get post-purchase training, boot camps and skills development?</p>
<p>No matter what technology you use, the embedding and ongoing value extraction from the technology needs ongoing support and training.</p>
<p>Especially if you are talking about newer cutting-edge skills in analytics, modelling and automation.</p>
<p>Are boot camps or master classes offered on a regular basis at no extra cost?</p>
<h3>6. Push and pull capabilities</h3>
<p>However, for the more automation-focused accountants and finance professionals the push capabilities can save you a lot of time.</p>
<p>Pushing data for tasks like creating invoices, bills, bank transactions or manual journals.</p>
<p>Make sure your chosen solution also has a push capability.</p>
<h3>7. Multi-entity consolidation (not aggregation)</h3>
<p>Think for a moment about a SAAS business that has an IP entity that charges a license fee to other companies in the group.</p>
<p>In some cases, there is an employment company that pays all employees centrally but cross charges a management fee.</p>
<p>The most basic form of intercompany eliminations is of course equity in a subsidiary and investment held by the holding company so assets and equity are not overstated.</p>
<p>Handling proper consolidation processes and intercompany eliminations is reasonably technical and often not well managed with straight data pull processes. With some Power Query Magic, you can do a lot.</p>
<h3>8. Multi-currency handling</h3>
<p>Similar to multi-entity, multi-currency groups can be complex with having to translate subsidiaries with varying currencies across profit and loss and balance sheet at a different rate relative to the group reporting rate eg AUD against USD, GBP, NZD etc.</p>
<p>Ensuring that the solution can handle multiple currencies is critical for running robust group reporting results.</p>
<p>Transparency on what rates are being used and their source is equally important for audit and reporting purposes.</p>
<h3>9. Robust spreadsheet tool for modellers and accountants</h3>
<p>Ask any leading or expert financial modeller what spreadsheet technology they would use and more often than not it’s Microsoft Excel (not Excel for Mac).</p>
<p>Now whilst other spreadsheet tools like Google Sheets are great for multi-user collaboration, they often fall over with larger data sets as the browser simply cannot process more data efficiently.</p>
<p>In some cases, the same cell having different values for different users of the same spreadsheet live has been witnessed by heavy Google sheets users.</p>
<p>If you are going to build proper robust financial models and analyses then for the most stable and advanced tool Excel simply is the right tool.</p>
<p>Throw in Dynamic Arrays, LAMBDA and other enhancements and you have a true weapon of data and modelling at your fingertips.</p>
<p>The Power tools of Excel really sets it apart.</p>
<h3>10. Data pulled into pre-designed tables or on a single cell formula basis</h3>
<p>Some solutions in the market pull data not in a tabular structure but on a formula query basis.</p>
<p>Whilst this can be very fast and efficient to run, often you require 1 click tabular structures ready to go for the profit and loss across multiple entities, currencies and tracking categories.</p>
<p>Be careful you understand clearly how the data is being pulled and what’s required on your end to do that in the most efficient way.</p>
<h3>Why EXL Cloud?</h3>
<p>Of course, we believe what we have built can handle a lot of the challenges currently being experienced out there, but also take it beyond just data pulling and pushing problems but a holistic solution for analytics, modelling and advisory support.</p>
<p>Our 1-way cash flow model has got the eyes of many excited accountants looking to develop cash flow advisory services.</p>
<p>We also recently developed a weekly cash flow model for training purposes and will be releasing it soon. You can see the weekly cash flow in a <a href="https://www.youtube.com/watch?v=1DSV5rXLfbY" target="_blank" rel="noopener noreferrer"><strong>recent cash flow webinar.</strong></a></p>
<p>But don’t listen to us, check it out yourself with <a href="https://exlcloud.io/features" target="_blank" rel="noopener noreferrer"><strong>free downloads</strong></a> and <a href="https://exlcloud.io/support" target="_blank" rel="noopener noreferrer"><strong>videos</strong></a>.</p>
<p>Our <a href="https://exlcloud.io/support" target="_blank" rel="noopener noreferrer"><strong>Excel boot camps are launching soon</strong></a>!</p>
<p>We will let you decide rather than us doing the hard sales pitch here.</p>
<p>We have had comments from customers that we seem to be the closest solution that fits their needs and more.</p>
<p>Every business and firm needs to assess the tool relative to where they are now and where they want to go.</p>
<p>Whilst it's great to have alternatives, make sure you choose the right tool that suits the future strategy of your firm.</p>
<p>If you want to check out more, head over to <a href="https://exlcloud.io/" target="_blank" rel="noopener noreferrer"><strong>our website</strong></a> and you can <a href="https://exlcloud.io/sign-up" target="_blank" rel="noopener noreferrer"><strong>start a free 7-day trial</strong></a>.</p>`,
  },
  {
    title: "Inside the Mind of a Spreadsheeter vs a Financial Modeler",
    slug: "inside-the-mind-of-a-spreadsheeter-vs-a-financial-modeler",
    author: "Lance Rubin",
    coauthor: null,
    date: "2022-03-25",
    excerpt: `There is certainly a big difference between a spreadsheeter and a financial modeler....`,
    tags: ["Financial Modelling","Excel","Error Checking"],
    heroType: "brain",
    content: `<p>There is certainly a big difference between a spreadsheeter and a financial modeler.</p>
<p>However, the problem is who draws that line and determines who is placed on either side of it.</p>
<p>I have met, witnessed and trained many people over the past 20 years and it is still amazing to see how wide this spectrum can be, not to mention the opaqueness of that line.</p>
<p>Apart from there being no single method of measuring this difference, you will even struggle to get a bunch of expert modelers to agree what are the definitive criteria or standards are to follow in order to draw that line very clearly.</p>
<p>Everyone is scared the other might “own it” and desperately hold onto their own approach so sadly there are 3 that would call themselves a financial modeling standard.</p>
<p>We prefer to use <a href="http://www.ssrb.org/standards" target="_blank" rel="noopener noreferrer">BPSMS</a> (was the first standard developed), but in reality they are all very similar in overall approach and consistency.</p>
<p>I even saw a list of formulas on the axis of evil by a leading accounting firm, yet a world champion proceeded to use one of those “evil” formulas in his demonstration during a <a href="https://gtc.modeloff.com/" target="_blank" rel="noopener noreferrer">Modeloff Global Training Camp</a>.</p>
<p>So it would be very dangerous for me to even attempt drawing such a hard line but I can certainly attempt to layout a framework.</p>
<p>I will try explain and give readers food for thought when looking at the mindset of the two, which is more based on me having met thousands of Excel users across Australia, South Africa, Sri Lanka, India and Hong Kong.</p>
<p>Having previously transitioned myself from a spreadsheeter to a professional modeler, I can’t even say exactly when it was that I moved over to the other (perhaps dark) side.</p>
<p>Perhaps the day I unplugged my mouse and started to use only shortcut keys.</p>
<p>Or was it the day I learnt Index(Match) and no longer used Vlookup or perhaps Offset or my first copy/paste and goal seek macros….nah…has to be that day I started using data tables or a solver driven macro button.</p>
<p>Now you can see the problem.</p>
<p>Here is a short list that hopefully helps people assess personally where they might be and what might need to change to progress toward improving themselves toward being as a Financial Modeler and away from being a Spreadsheeter</p>
<h3>Spreadsheeter</h3>
<ul><li>Believes he/she has little if any errors in their spreadsheet and denies or avoids thinking about them.</li>
<li>A spreadsheeter just wants to get the job done and will rush through the process, even occasionally hardcoding numbers in formulas to balance a balance sheet and hide it in other debtors or creditors when it might be out of balance. Or have a “balancing item” / “historical balancing” as an unreconciled difference. Maybe make other assets equal the difference between net assets and total equity to force a balanced balance sheet…I know all the tricks because I used them a long time ago.</li>
<li>A spreadsheeter likes the fact that their spreadsheet is really complex in its design which nobody, apart from them, is able to interpret what is contained in it. Even the simplest of tasks identifying where the assumptions are located is a game of hide and seek within the spiderweb of formulas. They aim to make things complex (job protection).</li>
<li>A spreadsheeter takes days sometimes weeks to roll forward spreadsheets and lots of manual copy and paste. They will spend more of their time preparing it and little time analysing, running sensitivities and scenarios. Its rare you will find scenario and sensitivity analysis in the spreadsheet. They might even use the words “it is what it is cause the model says so”. It’s like the model has it’s own brain and can never be wrong or changed dynamically. Spreadsheeters hardly ever build macros to automate the complexity.</li>
<li>The spreadsheet would and could never be served to anyone, let alone a queen. The intention is not to ever explain or show it to someone in detail only to create a few fancy dashboard which are then printed or saved to PDF format so nobody has to look under the hood. It’s not pretty for those that have had the pleasure of having to review another spreadsheeters spreadsheet when they go on leave or change jobs. I had 2 staff members that struggled for weeks to switch roles purely due their different spreadsheeting skills.</li>
<li>Spreadsheeter uses their mouse a lot and knows very few shortcut keys apart from Ctrl C (copy) and Ctrl V(paste) (which they use a lot). Maybe occasionally Ctrl S (save).</li></ul>
<h3>Financial Modeler</h3>
<ul><li>Recognises that all spreadsheets will contain errors when first built and therefore actively develops error trapping and reporting/flagging within a model to detect and resolve them.</li>
<li>A modeler actively goes looking for errors and writes formulas carefully to minimise errors and enforce consistency. A balance sheet that doesn’t balance is a cardinal sin and worthy of punishment by public humiliation.</li>
<li>A modeler builds models so they are easily navigated and well structured. Whilst the formulas might be complex depending on the business logic and flexibility the Modeler strives to enable others to easily use and navigate the key assumptions and outputs. They aim to make things simple (it’s actually harder to make complex models simple) so others can use and navigate it.</li>
<li>A modeler will find every angle possible to reduce the time spent on updating a spreadsheet so that they can spend more time on possible scenarios and potential impacts of changes to key assumptions. The modeler recognises it’s a matter of relativities across different scenarios rather than an absolute single outcome. Not matter what the model reflects as outputs it will never be 100% accurate. A modeler would use macros and probably run Monte Carlo simulations if required to lower error risk.</li>
<li>Presentation is key. The model is built as if it were an expensive cuisine being served to the queen. There would certainly not be a bunch of excel errors hanging around like egg shell pieces in scrambled eggs. Not really a pleasant experience eating egg shells.</li>
<li>Financial modeler hones his/her shortcut key strokes and might even remove the mouse all together. They are also known to remove the F1 key as its just a waste of a key and given the frequent use of the F2 key (to understanding basic formulas and logic) is right next door.</li></ul>
<h3>Conclusion</h3>
<p>There are sadly a lot more spreadsheeters out there than modelers (2% of Excel users would be professional modelers), however fear not as there are tools and educators to help, like me and others.</p>
<p>There are literally truck loads of free online materials and YouTube channels to get up the curve.</p>
<p>I was once a spreadsheeter feeling proud that I was the only person that could understand what I had created.</p>
<p>Whilst I thought this was a great place to be, I soon realized that the painful process of maintaining the spreadsheet all by myself eventually became boring and I could use my time to add more value outside the spreadsheet through conversations whilst the spreadsheet was merely the decision making tool, not the bible.</p>
<p>Being able to drive real business conversations and help drive performance face to face with people and not behind spreadsheets is truly life changing.</p>
<p>We are human and whilst machines can do a lot for us, right now influencing decision making with other humans still needs our experience, our personal connections and care for others being successful as it’s the best way we too can become successful.</p>`,
  },
  {
    title: "Financial Modelling: Diamonds in the Rough",
    slug: "financial-modelling-diamonds-in-the-rough",
    author: "Lance Rubin",
    coauthor: null,
    date: "2021-11-26",
    excerpt: `Why is it so hard to find Finance staff with good financial modelling skills?...`,
    tags: ["Financial Modelling","Excel","Virtual CFO"],
    heroType: "diamond",
    content: `<p>Why is it so hard to find Finance staff with good financial modelling skills?</p>
<p>Surely all accountants and professional finance people are good financial modelers?</p>
<p>When I was leading a large team within the Finance function of a major Australian bank it was difficult to find good modelling skills.</p>
<p>This isn't just a skills gap in banks but across all Finance teams in corporates and small to medium sized entities.</p>
<p>It's nobody’s fault, we were never trained and everyone just got tips off the resident "Excel expert" in the team. There is always one...Or we used Google and learnt from Chandoo and YouTube videos to solve problems in spreadsheets….just like you solve anything really…YouTube saviour.</p>
<p>When joining a company it was expected that everyone knew how to use Excel with a high degree of competency in Financial Modelling.</p>
<p>But the problem, in my experience, most don't have this competency, no matter how many years they have been in Finance, even in the largest companies in Australia.</p>
<p>The general level of financial modelling skills in Finance is pretty poor...period.</p>
<p>Most just think having good financial modelling skills means you are good at Excel but its way more than that.</p>
<p>Let’s break it down into 2 key questions:</p>
<strong>1)    What does competency actually mean?</strong>
<strong>2)    How do you solve this skills gap?</strong>
<h3>Competency in Financial Modelling</h3>
<p>Is having excellent Excel skills means you are great at financial modelling?</p>
<p>There is certainly a strong correlation but FM is way more than just Excel formulas, functions and shortcut keys.</p>
<p>Does knowing how to use Vlookup qualify or is Index (Match) an absolute dead set requirement? What is your opinion?</p>
<p>Firstly, I believe that it really doesn't matter which formula you use in theory provided you can build a financial model that is flexible (expandable vertically and horizontally), dynamic (cope with unlimited what-if scenario analysis and possibly Monte Carlo simulation) and well structured (no hardcoded formulas and organised content)</p>
<p>Secondly once you have nailed the above you need to be able to comfortably build a 3-way model, the bedrock of any good modeler.</p>
<p>Lastly you need to be able to use the model in delivering insight, foresight and influence decision making.</p>
<p>Being the CFO of a fintech start-up, amongst building models for many other small and medium-sized businesses, this is where the value lies.</p>
<p>In reality most people don't care about the model but the decision that is made with it. Some complex decisions on working capital, global expansion and multiple debt tranches is not simply solved without a robust financial model.</p>
<p>But don't lose sight of the real prize here and that is influencing key decisions made by non-financial people or customers.</p>
<p>I originally thought competency in financial modelling consisted of 3 main technical skills, as I wrote in one of my <a href="https://www.modelcitizn.com/cashflowmodeling/https/mediumcom/making-informed-relevant-and-purposeful-decision/why-financial-modelling-skills-will-be-a-big-career-door-opener-for-emerging-accounting-and-finance-8ef3b9cac5f3" target="_blank" rel="noopener noreferrer">first blogs</a>   ….but I am now absolutely convinced that this is actually 5 key areas having presented in front of over 300 finance professionals over the past 2 years. The first 3 are a repeat of the earlier post.</p>
<strong>1.    Excel</strong> - Understanding how to construct formula logic and model structure within Excel. This is really a competency in using Excel for more than just a fancy calculator.
<p>Building consistent logic horizontally for example. I still see many people not able to construct a formula that is consistent and reverting to hardcoding. Learning how to build a multi-dimensional scenario managers and run monte carlo simulation using Excel formulas and perhaps a bit of VBA can be important in some instances (not all).</p>
<strong>2.    Accounting</strong> – understanding how to build a balance sheet and have it balance is the bedrock of a good model.
<strong>3.    Business Acumen</strong> – understanding what drives value in a business and the drivers.
<strong>4.    Problem solving skills</strong> – this is something that has become probably one of the biggest skills gaps. The rest one can learn through experience and practice but problem-solving skills goes more into the way your brain works and solves problems. Some people are really good at this, others just cannot “crack the code”.  It important to understand your strengths and also areas of improvement.
<strong>5.    Technology</strong> – in particular learning how to use new technologies that sit inside and outside of Excel can enhance your existing modelling skills to build models quicker, more accurately and visualise the results in a way that is more engaging.
<p>To get started you should probably take a look at the Financial Modelling Institute (FMI) and the Advanced Financial Modeler (AFM) level 1 accreditation. This will at least cover off on 1-4 above.</p>
<p>Thereafter you can explore some of the technology we use in the Future of Financial Modelling world tour. See our <a href="https://www.youtube.com/channel/UC2_5lHYRDtQPZW1t0PHBInA" target="_blank" rel="noopener noreferrer">YouTube channel</a> for more information.</p>
<h3>How do you solve this skills gap?</h3>
<p>When I started at Investec Bank as a financial modeler within the Property Investment Banking division I remember being behind the pack in my financial modelling skills.</p>
<p>But, with a bit…well a lot actually, of practice by the time I was in the Corporate Finance and later the Property Private Equity teams I had even surpassed those that I trailed.</p>
<p>Solid practical experience, late nights, learning to apply the best practice spreadsheet modelling standards and a few deals under my belt I closed in on the pack and was near the front.</p>
<p>Then I built one of the most complex models with multi tax, multi entity and multi currency to assist the Toga hospitality group (Adina brand) expand their presence into Denmark and Germany.</p>
<p>The bottom line is practice. It's in the 70% of your knowledge and skills development vs the 20% observing and 10% studying.</p>
<p>I also recently submitted an alternative FMI solution to the example case study. You can find it <a href="https://fminstitute.com/learning/" target="_blank" rel="noopener noreferrer">here</a>.</p>
<h3>Conclusion</h3>
<p>Financial Modelling opens new doors of opportunity today and into the future.</p>
<p>If you don't have them in your team and don't have the time to learn it yourself here are some steps you can take.</p>
<strong>1. Sponsor and support</strong> your team in learning through the FMI and the approved trainers (yes we happen to be one).
<strong>2. Look out for upcoming webinars and a series of workshops</strong> as part of our global tour on the Future of Financial Modelling. Consider sending them to learn some of most advanced tools for model building and visual influence.
<strong>3. Hire a gun financial modeler</strong> using the <a href="https://vervoe.grsm.io/LanceRubin" target="_blank" rel="noopener noreferrer">Vervoe</a> financial modelling interview scripts. It will help you find that needle in a haystack. It will certainly give you the confidence of finding competent financial modelers.
<p>I used it to hire our contractors now located in 5 countries, without wasting time interviewing all potential candidates who were only good at Excel.</p>
<p>And lastly, don’t give up and remember in the words of Dr Carol Dweck….master the art of “<strong>Yet”</strong>.</p>`,
  },
  {
    title: "Why Financial Modelling Skills Will Be a Big Career Door Opener",
    slug: "why-financial-modelling-skills-will-be-a-career-door-opener",
    author: "Lexi B",
    coauthor: null,
    date: "2020-01-31",
    excerpt: `If you have recently been for a job interview or at least just taken a small peek through the door called opportunity then you may have noticed something emerging regarding a new key skill requirement, which you may or m...`,
    tags: ["Financial Modelling","Excel","Error Checking"],
    heroType: "door",
    content: `<h3>Background</h3>
<p>If you have recently been for a job interview or at least just taken a small peek through the door called opportunity then you may have noticed something emerging regarding a new key skill requirement, which you may or may not have.</p>
<p>Irrespective of your level, financial modelling skills have become one of the most highly sought after for finance professionals today.</p>
<p>Good news for candidates is there is short supply and huge demand. There was certainly no shortage of opportunities when I was looking for a job recently, but I decided to use this shortage to consult to many different companies rather than just one as their employee.</p>
<p>Bad news is if you are in a finance team and never built or know what a 3-way model is, then you have lots to learn and to catch up on. A 3-way model refers to the 3 financial statements namely an Income Statement, Cash Flow and most importantly a balanced Balance Sheet.</p>
<p>It is very likely that despite your career as an accountant you have probably never been given the opportunity to build a 3-way integrated model. Certainly, of the 26 people that worked for me in a large corporate, nobody had.</p>
<p>One might want to argue that a 3-way model isn’t entirely necessary, and in some cases it isn’t but once you have built one and integrated it with rolling actuals you never need to build another model again as all the information regarding cash flow, profitability, valuation is all there when you need it.</p>
<p>But have no fear, you are not alone by the way (hence the short supply). It’s as a result of a commercial and technical training gap in an accountant’s career that has naturally evolved over time.</p>
<p>Systems and processes in preparing financial and management reporting has only recently become more automated so up until now, a lot of what Finance does or in some cases still does is the production of financial information and forecasts and very little in the form of dynamic financial and business modelling.</p>
<p>The reality and irony currently is most roles don’t allow you the opportunity to gain that vital transaction or corporate finance modelling experience, yet when you pick up a job description or role purpose statement you will see the words financial modelling.</p>
<p>I was in a similar position as an auditor for PwC and at one stage in my career what I thought was financial modelling was simply basic financial analysis, planning and forecasting and not the sort financial modelling I am currently accustomed to. It was only following my time at Investec’s corporate finance and property private equity divisions that enabled me to really develop my modelling skills as I was doing it on a daily basis.</p>
<p>The challenge is up until now employers and businesses didn’t often require forecasting or modelling on a regular basis, probably quarterly at best. This means you didn’t get the vital on the job experience and training to develop those skills that enables you to build large scale complex models.</p>
<p>It also means you wouldn’t have had the opportunity on a more regular basis (definitely not daily) to undertake financial modelling that can help you create insight through multiple scenario analysis and even probability weighted outcomes.</p>
<p>Businesses and corporates have become far more digital and automated and it’s getting more complex to cope with all the information (financial and non-financial), hence the increase in demand for financial modelling which requires a thorough understanding of the financial impacts of all those complexities intertwined.</p>
<h3>Journey to success</h3>
<p>So how do you learn some of these modelling skills?</p>
<p>Here are my suggested 5 easy steps to get started. I say get started, because the only way you develop modelling skills (or any skill for that matter) is practicing it repeatedly.</p>
<p>1. <strong>Create capacity and a mindset of change</strong></p>
<p>This is so important (hence it’s # 1) and probably the biggest hurdle you have now. The automation and offshoring of traditional finance tasks <strong>should not</strong> be seen as a<strong>threat</strong> but an <strong>opportunity</strong> to offload the finance production line.</p>
<p>I know this can be confronting as it’s probably a large part of what you have done historically and probably right now as a finance professional, but without capacity you will never get started.</p>
<p>Also, don’t be afraid to seek out automation and suggest it to your boss, he will certainly be impressed that you are looking for better ways to work. I have automated 26 bespoke spreadsheets using some of the latest Excel based content management technology that doesn’t require a large investment other than time (there are many other Finance automation systems but these can be very expensive to buy and implement). Reach out to me if you want to find out more about spreadsheet automation and start the journey.</p>
<p>I estimate that a large majority of accountants are capable of learning financial modelling if given time to focus on it. It will certainly be worth it given the current employment odds, but it does start with a change in your mindset.</p>
<p>Are you going to take the blue pill or the red pill?</p>
<p>As accountants, we are often resistant to change as we like control and for things to be in order, but following some of the largest innovations in technology we can no longer resist the wave of change.</p>
<p>You only have to look at what Xero has done for the role of a bookkeeper, converting a bank reconciliation into an app like process through gamification. It allows ordinary business people to match transactions from a bank transaction feed to the chart of accounts with no debits or credits, child’s play really. If you don’t change your mindset, you will soon be left with no option and that supply shortage will be well and truly gone.</p>
<strong>2. Research</strong>
<p>Do some research and try to understand the size of the skills gap you might have today that will help you understand how much catching up you need to do. For example, if you have never used or worse even heard of the following formulas you probably have a fair amount of ground to make up:</p>
<p>a. INDEX and MATCH;</p>
<p>b. OFFSET, ROW, RIGHT, LEFT;</p>
<p>c. IF, SUMIF, SUMPRODUCT;</p>
<p>d. COUNT, COUNTA, COUNTIF;</p>
<p>e. EOMONTH, YEAR, MONTH</p>
<p>f. MAX, MIN, MOD</p>
<strong>3. Training</strong>
<p>If you don’t know at least 80% of the above formulas, then step 3 is for you. I suggest you go on an Advanced Excel and Financial Modelling training course. Model Citizn was recently approved by the global <a href="https://fminstitute.com/atp/" target="_blank" rel="noopener noreferrer">Financial Modeling Instititute (FMI)</a>. If the above was a breeze, then move onto step 4, but feel free to take a look at a more advanced training course, especially if your employer is prepared to pay for it.</p>
<p>The course can be the most valuable money you will spend on your career, assuming you then apply what you have learnt in the course. If you fail to apply any of it, it will be the least valuable course you have attended.</p>
<strong>4. Practical application of your skills</strong>
<p>Go to <a href="http://www.modeloff.com/" target="_blank" rel="noopener noreferrer">www.modeloff.com</a> and try some of their free past questions by applying your knowledge to find the solution; which you can mark in your own privacy (so nobody needs how well you do).</p>
<p>Perhaps even compete in Modeloff (you will probably have to wait till next year, so plenty of time to practice) just to give yourself an extra challenge, but I can assure you the competition is tough with the world class question design team making it no walk in the park.</p>
<strong>5. Learn one of the modelling standards</strong>
<p>Get familiar with some of the recognised financial modelling standards. I am not going to get into a debate about the best one, but any one is better than having none at all. The standards are Best Practice Spreadsheet Modelling (BPSM), FAST and SMART.</p>
<p>I prefer the BPSM standard but that is entirely a personal preference and you need to work out what is best for you in the time you have. BPSMS is extremely comprehensive and extensive. Most of the large accounting firms apply the FAST standard as a guideline.</p>
<h3>Software and technology</h3>
<p>Once you have been through the above 5 steps and developed your skills sufficiently start to explore some of the latest technology and become familiar with the following financial modelling software:</p>
<p>a. <a href="http://www.modano.com/" target="_blank" rel="noopener noreferrer">Modano</a>, is the world’s first Excel based content management system which you can download for free in the community version. Give it a crack along with their online training.</p>
<p>b. <a href="http://www.modeler.com/" target="_blank" rel="noopener noreferrer">Modeler</a>, which enables you to turn your financial model into an App using only Excel and PowerPoint with no coding.</p>
<p>c. <a href="http://www.spreadsheetadvantage.com/" target="_blank" rel="noopener noreferrer">Spreadsheet Advantage</a>, which helps you interrogate a spreadsheet and identify where you might have an error. Psst…don’t tell anyone but almost every spreadsheet has an error, so it’s no shame to admit it, its only shameful to assume yours is completely error free all of the time.</p>
<p>I have built plenty of models and not one single model was error free at version 1…of course I found the errors using tools like spreadsheet advantage, corrected them, reviewed it again and over time built internal error checks and alerts for example a balanced balance sheet check and other techniques. only then where the errors were removed.</p>
<p>By using the above software it is already possible to maintain a rolling 3-way integrated financial model with accounting packages like Xero which takes only 1–2 hrs each month to update the entire model with the latest monthly actual results. You can then easily present this in an App to key stakeholders in a two way conversation to drive business value.</p>
<p>As I have explained to many others, financial modelling skills comprises 3 main technical components which will enable you to be a great modeler in addition to being a great accountant and finance professional:</p>
<p>1) Rock solid understanding of accounting and finance i.e. debits/credits</p>
<p>2) Business acumen or commercial nous</p>
<p>3) The ability to use Excel and design models logically, consistently and neatly.</p>
<p>This needs to be your key focus when building a robust analysis to extract insights and tweak strategic direction of the business to increase value chains and ultimately shareholder wealth.</p>
<p>One of the most challenging and imperative aspects will also be matching technical knowledge with building relationships to help solve problems with key business stakeholders (i.e. alignment to strategy with a focus on execution).</p>
<h3>Conclusion</h3>
<p>Being the captain of the Titanic doesn’t help when you keep on looking backwards to see where you are going. There may be an iceberg heading your way and you need to steer the ship to avoid, often unlikely yet probable, issues.</p>
<p>Don’t leave it too long before the supply of this skill starts to meet all the demand.</p>`,
  },
  {
    title: "Forecasting Skills Doesn't Guarantee Good Modelling Skills",
    slug: "forecasting-skills-doesnt-guarantee-modelling-skills",
    author: "Lance Rubin",
    coauthor: null,
    date: "2019-03-12",
    excerpt: `Just because you can drive a car doesn't mean you can be a Formula 1 race car driver....`,
    tags: ["Financial Modelling","Error Checking","Cash Flow"],
    heroType: "target",
    content: `<p>Just because you can drive a car doesn't mean you can be a Formula 1 race car driver.</p>
<p>Playing T20 cricket doesn't guarantee you will be a great test cricketer.</p>
<p>The same goes for forecasting and financial modelling.</p>
<h3>Let's start from the beginning.</h3>
<p>Shortly after leaving investment banking corporate finance, where my financial models produced forecasts for investors or shareholders and needed to be audited, I joined a traditional finance team.</p>
<p>One day, as the finance business partner, I was debating the concept of financial modelling with one of the FPA team leaders.</p>
<p>A claim was made that as a result of building many forecasts this would naturally mean he had lots of financial modelling skills. .... (no auditor had ever checked those forecasts, so there are bound to be errors....there always are unless its audited...and even then its not guaranteed.)</p>
<p>However, I had a different view.</p>
<p>He had certainly developed the ability to build a forecast spreadsheet but could he actually build a good (dynamic) financial model with multiple scenarios and simulations?</p>
<p>Whilst I agree there are certain skills that are similar, there are still many gaps that most are not even aware of.</p>
<p>So lets really define the spreadsheet in comparison to a financial model.</p>
<h3>Forecasting vs Modelling</h3>
<p>In my experience having reviewed many forecasts produced by finance professionals including members of my own team, I noticed the following common differences between a good financial model and a forecast spreadsheet.</p>
<p>Lets compare simply</p>
<h3>Structure</h3>
<strong>Finance Forecast</strong>
<p>Difficult to see any formal structure in the models, especially when wanting to understand where you might find the assumptions to the model and the key outputs, KPIs etc. Its difficult to see where it started and ended.</p>
<p>I have seen very limited examples of a really good finance forecasts built like a financial model.</p>
<p>It's like walking to someone's house and you've walking through the garden at the back and you just don't know where to find the toilets or where the people hangout.</p>
<strong>Financial Model</strong>
<p>The financial model has clearly delineated assumptions and outputs.</p>
<p>It may even have navigation links (hyperlinks) in a table of contents to make it really easy.</p>
<p>Ease of navigation and whilst there might be different styles applied, it is important to even to show on a "cellular" level the assumptions and outputs should be easily visible.</p>
<h3>Formulas</h3>
<strong>Finance Forecast</strong>
<p>In the finance spreadsheets the formulas are often hard-coded values and seldom will they be consistent horizontally.</p>
<strong>Financial Model</strong>
<p>In the financial model this is a rule that is never broken.</p>
<p>Formulas are always written on a consistent horizontal basis to enable flexibility of logic.</p>
<p>If hardcoded it renders it model inflexible which is one of the pivotal parameters of a good financial model.</p>
<h3>Error detection and prevention</h3>
<strong>Finance Forecast</strong>
<p>A finance spreadsheet will seldom have error detection and definitely in very very few circumstances error prevention.</p>
<p>I have seen some error detection in spreadsheets, but hardly any (less than 1% have I seen with error prevention, like data validation.</p>
<strong>Financial Model</strong>
<p>All good models have lots of error detection (the more the better). Its like adding all these safety belts, airbags and many more to your racing car.</p>
<p>Some really good ones come with built prevention so you cannot even make an error even if you tried.</p>
<p>Its like your breathalyser test built into the car that says you are too tipsy to be allowed to change this model.</p>
<h3>Scenario management, simulations and sensitivities</h3>
<strong>Finance Forecast</strong>
<p>The purpose of a finance forecast generally doesn’t include scenario management and simulation is unheard of. Happy to hear otherwise.</p>
<p>The purpose of a finance forecast is to get a forecast which becomes the budget for the following year...or perhaps in some quarters an update or quarterly business review.</p>
<p>There's a lot of pressure, with lots of stakeholders and it's not possible to always add this very important step to the budgeting and forecasting process.</p>
<p>It takes too long and generally there is limited strong skills that can build something like that robustly.</p>
<strong>Financial Model</strong>
<p>The entire purpose of building a financial model is absolutely to do scenario analysis and sensitivities as well as Monte Carlo simulation.</p>
<p>The whole purpose of building the model is it's the engine to your financial decision making, so this is highly valuable.</p>
<h3>Value Drivers (driver based) vs Growth rates (run-rate based)</h3>
<strong>Finance Forecast</strong>
<p>Because a finance spreadsheet is not built for the purposes of doing scenario analysis, but really to get lots of people to agree to a number (including the board), the value drivers are often left out.</p>
<p>Shortcuts to get to the forecast are put in its place and the output (often top down) It given as the outcome others need to work out to achieve.</p>
<p>Its like building the building and then asking the architect to draw it. That sounds like a really stupid idea.</p>
<strong>Financial Model</strong>
<p>All good financial models are built from the ground up based on the detailed drivers, not just the past results.</p>
<p>Building a model with actual value drivers that you can go back test and also look at the accruracy of those drivers (you unlikely to get it correct the first time) is the best result as the model improves in accuracy over time.</p>
<h3>Graphs, charts and other outputs</h3>
<strong>Finance Forecast</strong>
<p>Very few finance forecast actually have a lot of graphs and outputs</p>
<p>Seldom do people recognise that a chart can actually show accuracy of the model and be very useful, not just pretty pictures for a deck.</p>
<strong>Financial Model</strong>
<p>In many, if not all cases, a financial model is built with charts as a means of using them as a sniff test mechanism and for some pretty pictures.</p>
<p>Whether it's cash going backwards or certain key ratios, it's important to know whether those go out of a certain tolerances graphically.</p>
<h3>User instructions or guide like a table of contents</h3>
<strong>Finance Forecast</strong>
<p>If you don’t have the luxury of someone waking you through the spreadsheet succinctly, you wont even have a map or understanding of where you going.</p>
<p>It can feel like you have dropped in the middle of the desert not sure which way to go to the oasis.</p>
<strong>Financial Model</strong>
<p>Financial modelers take a lot of pride in their work.</p>
<p>A financial modeler will build a model in a way that the experience is pleasant.</p>
<p>Nice visibly appealing and interactive, like a great host with easy-to-navigate structure and table of contents with hyperlinks.</p>
<p>They really make it easy for you to enjoy your time while you understand what the models is currently modelling and forecasting for the future.</p>`,
  },
  {
    title: "Need Help Searching for the Best Advisory Tool in the Market?",
    slug: "need-help-searching",
    author: "Lance Rubin",
    coauthor: null,
    date: "2019-03-12",
    excerpt: `After meeting over 50 finance professionals and accountants last week, it remains absolutely clear to me that, the majority of people have no idea which rabbit hole of technology to go down to assess the best advisory to...`,
    tags: ["Excel","Cash Flow","Forecasting"],
    heroType: "search",
    content: `<p>After meeting over 50 finance professionals and accountants last week, it remains absolutely clear to me that, the majority of people have no idea which rabbit hole of technology to go down to assess the best advisory tools.</p>
<p>So, I decided to write this post.</p>
<p>I would like the customers to talk. Knowledge shared is extremely powerful and time saving for us all!</p>
<p>Having researched this space deeply I wanted to share these questions, which I ask when assessing a new “tool” for advisory services:</p>
<strong>1)     Content</strong> - Does it have 3-way financial statements (Income Statement, Balance Sheet and Cash Flow Statements for Historical and Forecast financial information). Most importantly does it contain a forecast balance sheet including forecast liabilities, working capital assets, capex and fixed assets etc.
<strong>2)     Flexible</strong> - Is it adaptable to your (ie clients) specific business logic? In other words, are you able to customise it without much effort eg. If you want to change the revenue drivers is this easy to do?
<strong>3)     Helps to make real business decisions and drive performance</strong> - Does it include rolling financials that can be compared to a budget? Can you run real live business scenarios and sensitivities easily?
<strong>4)     Time saver</strong> - Will it save you time straight away? How much time and effort will it take to get setup? Is it going to make your monthly reporting process quicker and easier especially when the chart of account changes or you need to change the way the business calculates its revenue. Is there an API that can update the data live whenever you want?
<strong>5)     Cost</strong> – Are you charged on a per staff user basis or on a per client basis. In other words, does it cost you more the more clients you have? Do your clients also must pay to use it
<strong>6)     Training</strong> – what is the cost and quality of the training? Is it online and available for you to go at your own pace? Are there YouTube videos and similar content available for you to learn from.
<strong>7)     Control</strong> – Does the system ensure you have accurate financial information always? Most importantly maintaining and ensuring your balance sheet always balances, particularly the forecasts balance sheet.
<strong>8)     Ease of use</strong> – Can other people use it (not only the client themselves, perhaps a 3rd party e.g. a bank) without also having to purchase the license? Can you send it to someone to operate it easily including running scenarios or sensitivities?
<strong>9)      Ease of integration</strong> – Does the tool integrate easily with any other system outputs like CSV, Excel files or similar data sources. Is it possible to structure the data coming from that source into multiple drivers eg some chart of accounts have only 1 revenue account, but multiple products at different prices? How easily can you forecast based on a driver for strategic planning for say new product lines or new business locations, or will this require additional configuration and most cost?`,
  },
  {
    title: "Why VLOOKUP vs INDEX(MATCH) Shows Your Lack of Embracing Change",
    slug: "why-vlookup-vs-indexmatch-shows-your-lack-of-embracing-change-innovation-and-better-excel-skills",
    author: "Lance Rubin",
    coauthor: null,
    date: "2019-02-09",
    excerpt: `Over the past year I've met many finance professionals as part of our FOFM world tour and future of finance workshops....`,
    tags: ["Excel","Career","Excel Functions"],
    heroType: "function",
    content: `<p>Over the past year I've met many finance professionals as part of our FOFM world tour and future of finance workshops.</p>
<p>Despite all the hype of digital finance transformation and the rise of analytics and advanced AI and ML there is one thing that still concerns me deeply about our ability to adopt change, innovation and better Excel skills.</p>
<p>I'm not even referring to adopting new tools and technologies (many of which will radically change our work today and are here now) but changing how we use our existing tools.</p>
<p>It's our lack of embracing even the smallest change (a different Excel formula) that really highlights how fixed minded we (Finance/FP&A) still are today.</p>
<p>This one we cannot blame senior management for not investing in training, we cannot blame lack of time as this blog post with links will take less than 30min to review. The bottom line is we just don't like change and making an effort to embrace it.</p>
<p>Period!</p>
<p>If we really want to have more rewarding careers we have to be more open minded and learn more skills, not by just attending a course but actually implementing small changes in our daily work routines.</p>
<h3>What is the big deal?</h3>
<p>Fact is, if we don't learn new skills, the existing tasks we do today will be automated.</p>
<p>There are also many links and videos to the benefits on index match over vlookup, <a href="https://www.youtube.com/results?search_query=vlookup+vs+index+match" target="_blank" rel="noopener noreferrer">here are a few.</a></p>
<p>Yes, these are “just tools and not a religion” as quoted from Oz Du Soliel, but in Finance we need to explore alternative contexts and be aware of both.</p>
<p>Fact is many finance people don’t even know about the existence of Index and Match, and that’s the key issue. Index alone is very powerful.</p>
<p>But let me explain it even more simply without showing you Excel.</p>
<p>If you wanted to find directions to a friends house today you simply type it into Google maps or Waze.</p>
<p>Before these apps we had a map book.</p>
<p>To find their street you first went to the street index and area and found the page with that specific street name.</p>
<p>Then worked back from that area (range) and main roads back to your house. Sound easy?</p>
<p>Imagine you didn't have the index page and paged through the 100+ pages of the map book (page by page) trying to find that single street.</p>
<p>Stop when you find the first street name, drive to the house and hope its your friends.</p>
<p>I bet you would never do that? I don't think anyone does.</p>
<p>You would be driving for a long time finding their house.</p>
<p>Everyone uses the map index, except 90% of finance people stuck on vlookup with coffee breaks whilst Excel locks up in massive files.</p>
<p>I suspect when map books or a single map sheet were first created no index was used.</p>
<p>That’s how outdated most of Finance spreadsheets are today,  compared to today's apps. We are way overdue on our own upgrade.</p>
<p>Well guess what, by using vlookup in Excel you are doing the same thing, using a long outdated and superseded formula.</p>
<p>Calculation speed is understandably dramatically slower, its volatile (recalculates every time you save) and it will stop on the first answer in an often badly sorted dataset with no index.</p>
<p>Doesn't feel like this is the best way to find your friend, does it?</p>
<h3>Conclusion</h3>
<p>Why most of the finance people that I meet (90%)  still use vlookup is a reflection of the lack of innovation and adopting change.</p>
<p>For 2019, I challenge all vlookup users to explore index(match) and be aware of how it works.</p>
<p>If you want to change, that's your decision but at least be aware of it.</p>
<p>It's a measure of your willingness and ability to change and embrace something really small and very flexible, Index alone is powerful.</p>
<p>I would love to hear your feedback and progress on this challenge.</p>
<p>Share with your fellow colleagues and challenge them to be more innovative and open to change.</p>
<p>Remember I am not even talking about PowerBI, PowerQuery, Modeler, Modano, PowerPivot, DAX, Python or any of the many more analytics and modeling tools and languages here now.</p>
<p>Just an Excel formula loved and hated by many.</p>`,
  },
  {
    title: "Why Being a 1-Person VCFO Business Is a Really Bad Idea",
    slug: "why-being-a-1-manwomen-vcfo-business-is-a-really-bad-idea",
    author: "Lance Rubin",
    coauthor: null,
    date: "2019-01-09",
    excerpt: `3 years ago I stepped out of the corporate world and became, what I didn't realise at the time, a virtual CFO for Banjo (Fintech lender)....`,
    tags: ["Financial Modelling","Virtual CFO","Cash Flow"],
    heroType: "warning",
    content: `<h3>Background</h3>
<p>3 years ago I stepped out of the corporate world and became, what I didn't realise at the time, a virtual CFO for Banjo (Fintech lender).</p>
<p>I don't really like the word VCFO but it's what we have for now so let's just roll with it. Probably a blog on its own.</p>
<p>I wrote a post on the topic about how it was actually quite challenging being a VCFO of 1 (Power of One = Power of None).</p>
<p>I shared some lessons learnt which resonated with many fellow VCFOs who I have met and even those who I hadn't heard of it in other countries around the world.</p>
<p>Since then I've also met many more virtual CFOs as many of those CFOs, like myself, were just running a single man or woman operation.</p>
<p>I (possibly some of them too) thought despite the fact of running my own business, it really didn't feel like I was building a scalable business with a good work life balance.</p>
<p>Long hours and weekends, but that's all now changed.</p>
<p>I had no choice but to disrupted my own role with this post, “<a href="https://www.modelcitizn.com/cashflowmodeling/2017/6/13/why-i-disrupted-my-own-role-and-you-should-do-the-same" target="_blank" rel="noopener noreferrer">Why I disrupted my own role and you should do the same</a>”.</p>
<p>I also know of a few VCFOs who struggled so much, just like I did,  to build the dream business and ultimately gave it all up to go back to a full time role, earning much less but removing the stress, increasing their take home pay but sadly not fulfilling their dream.</p>
<p>The important thing to learn is that change is constant and we have to constantly change too, even if its just to stand still and not fail.</p>
<p>At times I have felt like all I was doing was standing still, never quite cracking through the pain barrier.</p>
<h3>Refocus on your why?</h3>
<p>I am a huge Simon Sinek fan.</p>
<p>Building a business that is not grounded in your own purpose (why?) is very dangerous.</p>
<p>Getting paid for your time or making a profit is not a purpose but an outcome (many miss this point).</p>
<p>Make sure your purpose is clear and try stick to it. It can evolve on the edges but every morning you wake up it should be front of mind.</p>
<p>How are you going to fulfil your purpose today?</p>
<p>My primary focus is helping finance professionals or business owners adopt or use the ever evolving skills and tech landscape of finance, centred mainly around financial modelling.</p>
<p>In doing so I assess/research and even develop new ones to educate and communicate this knowledge.</p>
<p>So much of our roles today in finance is linked to technology so I continue along this path and through it add more value to business owners,  founders, start-ups and other keen Finance professionals wanting to learn.</p>
<p>CFOs just don't have the time to research all the tools out there, so I get to do it for them, so they stay ahead and become even more efficient.</p>
<h3>How do you avoid the mistakes I made?</h3>
<p>If you find yourself questioning your purpose then it might be time to consider the following key learnings.</p>
<strong>1. Price for value not time</strong>
<p>Most service businesses still charge for time.  With time being a limited resource so is your revenue potential. If your purpose is not valued you will get stuck with time and materials.</p>
<strong>2. Learn,  adjust, execute and repeat.</strong>
<p>Learn from mistakes, fix them and make the tough calls. You can never avoid mistakes but you can avoid learning from them which is much worse. Learn and repeat all over again till you have the right solutions that are aligned to your purpose.</p>
<strong>3. It's not about you,  but your customers that define success.</strong>
<p>We assisted clients raise capital, list on the ASX, solve business complexities, negotiate with government and navigate the cashflow pinch. Success is not just the outcome but the journey on how you got your clients there.</p>
<strong>4. Hire or invest in systems, processes and people that can do a better job than you.</strong>
<p>Focus on your strength, doing admin work is not it. Selling and keeping customers happy is and should always be your number 1 focus. Keeping focus on this as it has to be the highest priority, ahead of admin work and in some cases even delivery.</p>
<strong>5. Surround yourself with great people that share and support your purpose.</strong>
<p>This is not just a mentor,  although having one (and being one) is certainly recommended. I gain support and mentorship from many different people all over the world.</p>
<strong>6. Sales, sales, sales.</strong>
<p>If you not doing sales and marketing related activities every day and stuck working in vs on the business it will not end well.  I experienced this over 12 months ago when I had too much work and my global team wasn't fully established.</p>
<p>Sales is a process and without leads and conversion you simply don't have a business.</p>
<strong>7. Practice what you preach.</strong>
<p>Look forward and create value not a job.</p>
<h3>Conclusion</h3>
<p>If you are seriously considering leaving your cushy/shitty job to start a business being a financial mentor then you need to think of what that looks like.</p>
<p>Businesses out there have an accountant and bookkeeper but really need someone to help them look forward, and you might well be the person to do it.</p>
<p>But do you have the infrastructure to execute on that value?</p>
<p>If you don't setup your business for success and reskill/train yourself, then it's really going to end up in tears.</p>`,
  },
  {
    title: "Excel Is Dead!",
    slug: "excel-is-dead",
    author: "Lance Rubin",
    coauthor: null,
    date: "2018-05-02",
    excerpt: `If you haven’t heard of the outcry for the death of Excel then you must be living under a rock....`,
    tags: ["Financial Modelling","Excel","Virtual CFO"],
    heroType: "debate",
    content: `<h3>Lance (83kg 6 ft) vs Chris (110 kg 6 ft 2)</h3>
<h3>South Africa vs England</h3>
<h3>Wing/ Flank vs Lock/8th Man</h3>
<h3>Speed vs Power</h3>
<h3>Modeler vs Analyst</h3>
<p>If you haven’t heard of the outcry for the death of Excel then you must be living under a rock.</p>
<p>This highly emotive topic has gained a lot of high profile media attention, fake news and even changed the views of many finance professionals all the way up to the C-suite and Wall Street.</p>
<p>It’s so dramatic this shift in sentiment that it’s almost hard to tell who is actually right or wrong and what to do next in Finance Transformation.</p>
<p>There are very compelling arguments for and against.</p>
<p>So rather than debate it online we are going head to head in a gloves off session.</p>
<h3>In the “Excel is dead” corner</h3>
<h4>Chris Argent</h4>
<ul><li>BI and Analytics Strategy Manager, Group Finance, Vodafone</li>
<li>Founder of Linked Group, Generation CFO</li>
<li>Advisory Board Member, Future of Finance and CFO Summit, IQPC</li></ul>
<h4>Years of experience (25 years)</h4>
<p>17 years in core finance; 5 years as divisional CFO</p>
<p>8 years in Finance Transformation; 4 years as Finance BI and Analytics Lead</p>
<p>Worked in start up, SME and innovative driven enterprise; including Amazon and Vodafone.</p>
<h4>Linkedin Status</h4>
<p>5,474 Linked followers</p>
<p>10,206 views on last Linkedin post</p>
<p>67, 200 members on Generation CFO LI Group (Owner, moderator)</p>
<h3>Opening Argument</h3>
<p>MS Excel is a ball and chain around your finance team necks which stops them from thinking and working differently. It stops them improving data flows and process, stops automation savings, stops data management benefits and stops the “big picture prize” of whole company predictive analytics and storytelling which is the future of finance.</p>
<h3>3 facts for the death of Excel</h3>
<strong>Yesterday’s News</strong>— Excel’s only strength is its ubiquity. Everyone has access, everyone knows it, but it has significant limitations. There are many new kids, adults, robots on the block!
<strong>Manipulating Madness</strong>— Wanting your job to improve, but doing the same thing over and over will simply lead to madness, you need to change. Excel is an enabler of this madness as it ties you up in poor process and keeps you from new ways of working.
<strong>Data Dunce —</strong>Excel is like the locked down iPad in the corner of the local bank branch. Whilst it sits on powerful hardware, its use is restricted due to the fear “someone may break it”, consequently its data remains limited and unexploited.
<h3>3 facts against for Excel staying alive</h3>
<strong>The future is Data, not tools.</strong>Finance must own business data, not just GL, but all data, to ensure they can exploit it it (see above). Data is the priority, not which tools you use.
<strong>The future is here —</strong>You may not be behind today, but very soon Analytics will drive finance and business conversations and finance need to close the gap, and not with Excel.
<strong>The future is really here —</strong>A world driven by Analytics will mean a role change for finance. They will be whole company data interpreters and storytellers will a new set of skills.
<h3>In the “Excel is alive” corner</h3>
<h4>Lance Rubin</h4>
<ul><li>Founder & CEO of <a href="http://www.modelcitizn.com/" target="_blank" rel="noopener noreferrer">Model Citizn</a></li>
<li>Group CFO for <a href="http://www.sequelcfo.com/" target="_blank" rel="noopener noreferrer">Sequel CFO</a></li>
<li>CFO of <a href="http://www.banjoloans.com/" target="_blank" rel="noopener noreferrer">Banjo</a></li>
<li>Partner the <a href="http://www.theoutperformer.co/" target="_blank" rel="noopener noreferrer">Outperformer</a></li>
<li>Approved Trainer <a href="https://fminstitute.com/" target="_blank" rel="noopener noreferrer">Financial Modeling Institute</a></li></ul>
<h4>Years of experience (22 years)</h4>
<p>9 years FS Banking Assurance — PwC</p>
<p>4 years Investment Banking and CFO of Property Private Equity — Investec Bank</p>
<p>7 years Finance Business Partner and FP&A leader — National Australia Bank</p>
<p>2 years Cashflow Financial Modeler 💰 Finance Innovator 💡 SME Finance Business Partner ✈️ Speaker and Trainer 🎓</p>
<h4>Linkedin Status</h4>
<p>6,542 LinkedIn followers</p>
<p>1,865 current 90 day profile views</p>
<p>LI Goup manager for FPA Club (5,500 members)</p>
<h3>Opening Argument</h3>
<p>Excel will continue to be used by Wall Street, ASX, LSE, JSE stock market particpants (Investment Banks and advisors) to do deals via M&A activity, valuations by equity analysts etc.</p>
<p>Believe it or not, banks and Government Treasury departments still use Excel in some form to trade and price derivatives and other financial instruments (especially exotic or bespoke) in the front office using spreadsheets.</p>
<p>This will never change.</p>
<p>So if the big end of town recognises the valuable insight and decision making power of Excel to do real life deals modeling, why should we get rid of it?</p>
<p>It also comes native with poweful modeling and randomisation functionality not to mention statistical functionality too.</p>
<p>There just isn’t anything like it on the planet. The only thing it cant make is a cup of coffee but you can build pretty much build or do anything else ie CRM system, pricing tools, games, draw pictures, take minutes of a meeting, note taking and many many more.</p>
<h3>3 facts for Excel staying alive</h3>
<ul><li><strong>Ease of use</strong> — It’s the quintessential business tool for communicating numbers. Everyone knows how to use it and despite the varying levels of competency every working person has used it at sometime or another. Excel dying is like saying we should abandon the English language to communicate.</li>
<li><strong>Becoming more powerful</strong>- Excel is getting more and more powerful as time goes on. With the increased use of powerful add-ins and functions like Power Query and Power Pivot, more advanced dashboards and larger file size stability with formats like .xlsb it’s only a matter of time that it becomes even more embedded as a BI tool connected to other programs. It’s still the most used platform in the world for FP&A and will remain so for a long time to come.</li>
<li><strong>Excel is cheap</strong> - It’s even cheaper than a cup of coffee a day and is still referred to as the Swiss army knife of business tools given it’s versatility. You can even build a snakes and ladders game using Excel. Just take a look at a past Modeloff question and you can find it.</li></ul>
<h3>3 facts against the death of Excel</h3>
<ul><li><strong>Nothing comes close</strong> - The nearest competition to Excel might be Google Sheets but really doesn’t allow for any custom built applications embedded within in. Certainly no VBA. PowerBI and other more structured BI tools require time to learn. When most people don’t know even a fraction of what Excel can do, why bother switching programs when there is still so much to learn in Excel and no other system comes close to its flexibility and ease of use.</li>
<li><strong>Inertia of change is huge</strong>- the ability to change Finance is difficult. We can still achieve change with baby steps using Excel’s improvements but launching into new domains is a bit too much. Change is an evolution not a revolution so why abandon something that’s worked for us for decades and succumb to bullshit marketing tactics. We are smarter than that.</li>
<li><strong>Big Cost small benefit</strong> - new wave of BI Tools are not cheap to implement and use. Not just the applications themselves, but the time and cost of training, designing and maintaining the systems are significant. When enhanced features and benefits are on our doorstep within Excel why go to a more expensive option..just doesnt make sense…upskill people to use it better. Its not the spreadsheet that is the problem but the people that use it. Cars kill people, should we stop driving as well and all walk or ride bikes?</li></ul>
<p>What do you think?</p>
<p>Which corner to you sit in?</p>
<p>There ain’t no fence sitting here!</p>
<p>Join us for a gloves off joust on a podcast hosted by Andrew Codd Strength in the Numbers (SITN).</p>
<p>Lover or Hater of Excel you will most definitely learn something new, we promise….or at the very least have a good laugh.</p>
<p>And you thought accountants were boring.</p>`,
  },
  {
    title: "The Demand for Financial Modelling Skills Reaches New Heights",
    slug: "the-demand-for-financial-modelling-skills-reaches-new-heights",
    author: "Lance Rubin",
    coauthor: null,
    date: "2017-06-30",
    excerpt: `Have you noticed lately how many finance roles have “financial modelling” listed as a core skill? Financial modelling is now one of the most sought after skills in today’s corporate world and demand for financial modelli...`,
    tags: ["Financial Modelling","Excel","Virtual CFO"],
    heroType: "trending",
    content: `<h3>Finance Roles with new requirements</h3>
<p>Have you noticed lately how many finance roles have “financial modelling” listed as a core skill? Financial modelling is now one of the most sought after skills in today’s corporate world and demand for financial modelling experience continues to outstrip supply! The changes we see in our everyday lives are reflected in the corporate world and the finance industry is no exception.</p>
<p>Over the past decade our lives and the way we interact with technology has changed significantly. Consider how we listen to music today compared to the past (Spotify), how we watch television (Netflix), how we travel (Uber) or how we communicate and talk to others (WhatsApp, Viber, Skype and social media).</p>
<p>It should therefore come as no surprise that the core skills of finance professionals too have changed significantly with proficiency in financial modelling emerging as one of the most highly sought after pre-requisites. Even the term “financial modelling” wasn’t as widely used as it is today nor was it easy to predict that the specialist skill that was previously contained within Corporate Finance or M&A transactional modelling teams would now become a core requirement of the mainstream finance role.</p>
<p>Over my 18 year career in financial services across professional accounting firms, corporate finance and advisory as well as retail and wholesale banking businesses, I have watched with interest the rise in the demand for “value add” services from a finance function. This interest has not only led me to establishing <a href="http://www.modelcitizn.com/" target="_blank" rel="noopener noreferrer">Model Citizn</a>, a specialist financial modelling consulting firm, but also joining <a href="http://www.banjoloans.com/" target="_blank" rel="noopener noreferrer">Banjo</a> as their CFO and consulting for a leading professional services firm within their financial and business modelling team.</p>
<h3>Why Financial Modelling?</h3>
<p>In recent years I have developed a theory that financial modelling expertise has become the predominant talent requirement for career advancement in Finance and it seems I’m not the only one with this opinion. Two large professional firms previously published white papers on a related topic which is easy to understand but much more difficult to implement. The Ernst & Young paper “<a href="http://www.ey.com/Publication/vwLUAssets/The-DNA-of-the-CFO-2010/$FILE/The-DNA-of-the-CFO-2010.pdf" target="_blank" rel="noopener noreferrer">The DNA of the CFO</a>” (published in 2010) and the Deloitte paper “<a href="http://www2.deloitte.com/au/en/pages/strategy/articles/finance-business-partnering.html" target="_blank" rel="noopener noreferrer">Changing Focus: Finance business partnering in Australia</a>” (published in 2013) both point to the changes in services and expectations on CFOs and their teams to deliver more insight and strategic decision making that is commercially on point. The words “insight”, “strategic decision making” and “trusted advisor” all rely on financial modelling as a key ingredient in both producing, extracting and delivering this value-add.</p>
<p>As a member of a Finance team it’s just not good enough anymore to simply deliver the historical results and explain what happened, (even with the ubiquitous fancy dashboard report!). The harsh reality is that no one cares unless that explanation can be used to make a strategic decision which will enable real value creation and hence incremental increase in the valuation of the company, its returns or efficiency in the capital structure.</p>
<p>In my experience those explanations, although valuable, generally arrive too late to be of any significant use as the business has already moved on. The rate and quantum of changes to business trading conditions are so rapid that even 24 hours to make a decision might be too long. Think about an importing or exporting business that has just witnessed the Aussie dollar drop below 80 cents to the US $ or a transport company seeing petrol prices drop below $1.10 per litre. A decision on the price at which to take advantage or hedge against these movements to manage business performance becomes critical. Whilst some larger businesses may have a treasury function, many don’t, and the finance function needs to understand the impact on the overall performance, updated forecasts or budget setting.</p>
<p>To be able to answer some of the businesses’ most complex questions, such as those above, and provide insight requires strong modelling skills to dynamically adjust the future performance of the business given changes to certain key assumptions like currency and petrol prices. Some of these assumptions are so sensitive that “back of the fag packet” just won’t work anymore. I’m not suggesting that a high level sense check isn’t worth doing — it is always good to cross check the more detailed bottom up analysis. A robust three-way model that is updated monthly to enable re-forecasting and iteratively refining the business algorithm of future performance becomes very powerful and at times critical for the survival of the business during difficult trading conditions</p>
<h3>Transforming Finance isn’t easy, but incredibly valuable</h3>
<p>Not so long ago I was charged with trying to transform the role of finance partners in a large banking institution. The evidence supporting the transformation was sound, and the road map had been laid out clearly, but multiple attempts at moving the teams towards the “trusted adviser” had failed. In my opinion it wasn’t the lack of drive, senior leadership buy-in or people’s interest that had led to the failure but something more fundamental. The crisp and clear articulation of what the change would look like on a practical level, once successful, was missing. The picture of what the new world looked and felt like was still too grey to enable people to trust the roadmap and the change itself.</p>
<p>On the surface it sounded great when we used words like “so what?” to help people understand insight, but this was still too obscure e.g. so what if revenue dropped? We then moved to words like “now what?”, which was closer to being more action and decision orientated but still not quite there.</p>
<p>However, to answer a question like, “now what?” one has to hypothesise by making a bunch of assumptions and testing these through time. It’s at this point that expertise in financial modelling becomes critical. But, no financial modelling training was ever provided to the team and it was assumed that everyone who used Excel (which is pretty much the entire function) were great modellers or analysts. I mean, why shouldn’t they be? They have all been using Excel for decades, so surely they can do it? This was the missing piece of the puzzle in executing this transformation and an assumption that was deeply flawed.</p>
<p>Of course, we know that the <a href="http://www.plumsolutions.com.au/videos/skills-needed-financial-modelling" target="_blank" rel="noopener noreferrer">skills needed</a> to be a good financial modeller go quite a bit further than simply having good Excel skills. If the person performing the analysis doesn’t have the ability to create a robust, dynamic, rolling driver based financial model to test hypothetical scenarios how can you ever answer a question like “now what?” accurately? The skills required to build a robust three-way model is as different to using Excel day to day as riding a bicycle is to MotoGP. One could try and assume that riding a bicycle is no different to riding a motorbike, but racing around a MotoGP track is very risky and dangerous if you don’t know how to control the bike around a bend.</p>
<h3>If you can’t change them, hire them</h3>
<p>When I was hiring finance professionals, in my previous role as the Head of Performance Management in a major banking institution, I soon discovered that the hires I made with strong financial modelling skills were able to add significantly more value and quicker than those without it. I subsequently started to roll out internal training courses with a leading financial modelling consultancy firm and changed the way we recruited with a strong focus on financial modelling, even asking candidates to build a financial model as part of the recruitment process.</p>
<p>If you want to hire staff with financial modelling skills use the interview scripts that I wrote on the <a href="http://vervoe.grsm.io/LanceRubin" target="_blank" rel="noopener noreferrer">Vervoe hiring platform</a>.</p>
<p>As more of the finance production activities (preparing management and statutory reports) gets automated and offshored there will start to be an ever increasing focus on finance teams adding more value through insights and financial modelling.</p>`,
  },
  {
    title: "How to Build Cash Flow Models From Xero in Excel",
    slug: "how-to-build-cash-flow-models-from-xero-in-excel",
    author: "Lance Rubin",
    coauthor: null,
    date: "2026-05-15",
    excerpt: "If you're running a growing business on Xero, you've probably hit the wall: Xero's built-in cash flow reporting is fine for a snapshot, but it can't give you a forward-looking, scenario-driven cash flow model. For that, you need Excel.",
    tags: ["Cash Flow","Xero","Excel","Financial Modelling"],
    heroType: "flow",
    content: `<p><strong>The short answer:</strong> Build a cash flow model from Xero by extracting clean structured data into Excel, mapping your chart of accounts, building reconciled historicals, adding driver-based assumptions, then constructing a 3-way model where income statement, balance sheet, and cash flow all tie.</p>
<p>If you're running a growing business on Xero, you've probably hit the wall: Xero's built-in cash flow reporting is fine for a snapshot, but it can't give you a forward-looking, scenario-driven cash flow model. For that, you need Excel.</p>
<h2>Why Excel Still Wins for Cash Flow Modelling</h2>
<p>Xero is an excellent general ledger. It's not a modelling tool. When you need to answer questions like "What happens to our cash position if revenue drops 15% and we delay a hire by three months?", you need the flexibility that only a spreadsheet offers.</p>
<ul>
<li>Run multiple scenarios (base, best, worst) on the same data</li>
<li>Separate operating, investing, and financing cash flows with proper working capital mechanics</li>
<li>Drive the forecast from assumptions you can change, not static numbers</li>
<li>Present board-ready outputs that tie back to your actuals</li>
</ul>
<h2>Step 1: Extract Your Xero Data Cleanly</h2>
<p>The foundation of any model is clean historical data. You need at minimum: <strong>trial balance</strong> (monthly, 12+ months history), <strong>profit and loss</strong> (monthly detail by account), <strong>balance sheet</strong> (monthly snapshots), and <strong>account transactions</strong> for reconciliation and validation.</p>
<p>Manually exporting these from Xero and reformatting them is tedious and error-prone. <a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">EXL Cloud</a> connects Excel directly to Xero, pulling live data in a structured format ready for modelling — trial balance, P&amp;L, balance sheet, journals, and transactions in 8 clicks.</p>
<h2>Step 2: Map Your Chart of Accounts</h2>
<p>Before you build anything, map your Xero chart of accounts (COA) to a standardised model structure — grouping accounts into Revenue, COGS, Operating Expenses, Working Capital (debtors, creditors, inventory), Capital Expenditure, and Financing. A clean COA mapping is the difference between a model that's maintainable and one that breaks every time you add a new account in Xero.</p>
<h2>Step 3: Build the Historical Foundation</h2>
<p>With data extracted and mapped, build the historical section of your model. Best practice: actuals populate automatically from mapped data (no manual entry), use an ACT/FCST toggle so the model knows which periods are historical, and preserve the audit trail so every number traces back to a Xero account code.</p>
<p>Your historical section should produce a complete income statement, balance sheet, and cash flow statement that reconciles. If your historical balance sheet doesn't balance, stop. Fix it before moving to the forecast.</p>
<h2>Step 4: Add Driver-Based Forecast Assumptions</h2>
<p>Instead of manually typing forecast numbers, build assumption drivers:</p>
<ul>
<li><strong>Revenue:</strong> growth rate, volume x price, or amount per period</li>
<li><strong>COGS:</strong> margin percentage or unit cost x volume</li>
<li><strong>Operating expenses:</strong> fixed amounts, growth rates, or headcount-driven (salaries)</li>
<li><strong>Working capital:</strong> debtor days, creditor days, inventory days</li>
<li><strong>Capex:</strong> scheduled purchases with depreciation profiles</li>
</ul>
<p>Each assumption should be a clearly labelled input (blue font is the convention) that feeds formulas downstream. Zero hardcoding in the forecast zone.</p>
<h2>Step 5: Build the Cash Flow Statement</h2>
<p>With your P&amp;L and balance sheet forecast in place, the cash flow statement builds itself using the indirect method: start with net profit, add back non-cash items (depreciation, amortisation), adjust for working capital movements, subtract capital expenditure, add/subtract financing flows, and arrive at closing cash — which must equal the balance sheet cash line.</p>
<p>This is the "3-way" in a 3-way model: income statement, balance sheet, and cash flow statement must all tie. If they don't, the cash flow number is wrong.</p>
<h2>Step 6: Add Scenarios and Validation</h2>
<p>A cash flow model without scenarios is just a single guess. Add at minimum a base case (most likely outcome), best case (upside assumptions), and worst case (revenue drop, cost blowout, delayed collections). Then add a validation sheet that checks: balance sheet balances, cash flow reconciles to the balance sheet, no formula errors, and no hardcoded values in the forecast zone.</p>
<h2>Common Mistakes to Avoid</h2>
<ul>
<li><strong>Hardcoding forecast values.</strong> If you type a number directly into a forecast cell, you've broken the model's flexibility. Every forecast value should come from an assumption.</li>
<li><strong>Skipping the balance sheet.</strong> A P&amp;L-only forecast can't tell you about cash. You need the balance sheet to capture working capital, debt, and capex.</li>
<li><strong>Not reconciling.</strong> If your model doesn't tie three ways, the cash flow number is wrong. Full stop.</li>
<li><strong>Manual data entry from Xero.</strong> Copy-paste from Xero exports introduces errors and creates maintenance burden. Automate the data pull.</li>
</ul>
<h2>Making It Sustainable</h2>
<p>The best cash flow model is one you actually update. If refreshing the model takes 3 hours of data wrangling every month, it won't get done. EXL Cloud is purpose-built for this workflow — pulling live Xero data into structured Excel templates that include 3-way financial models, scenario managers, and validation checks out of the box.</p>
<h2>Frequently Asked Questions</h2>
<h3>What data do I need from Xero to build a cash flow model?</h3>
<p>At minimum: monthly trial balance (12+ months history), profit and loss, balance sheet snapshots, and account transactions. EXL Cloud pulls all of these from Xero in a structured, model-ready format in 8 clicks.</p>
<h3>What is a 3-way financial model?</h3>
<p>A 3-way financial model integrates income statement, balance sheet, and cash flow statement through formulas so all three reconcile. The closing cash on the cash flow statement must equal the cash line on the balance sheet.</p>
<h3>Can I build a cash flow model directly in Xero?</h3>
<p>Xero's built-in reporting is limited to historical snapshots and simple projections. For driver-based forecasting, scenario modelling, and board-ready output, you need Excel. Xero handles the general ledger; Excel handles the modelling.</p>
<h3>How does EXL Cloud help with cash flow modelling from Xero?</h3>
<p>EXL Cloud connects Excel to Xero and pulls live trial balance, P&amp;L, balance sheet, journals, and transactions in a structured format. The Advanced Content plan includes pre-built 3-way financial models with scenario managers and validation checks. Pricing starts at $50 AUD/month.`,
  },
  {
    title: "Top 7 Excel Tools for Cash Flow Modeling From Xero",
    slug: "top-7-excel-tools-for-cash-flow-modeling-from-xero",
    author: "Lance Rubin",
    coauthor: null,
    date: "2026-05-20",
    excerpt: "If you're modelling cash flow in Excel using Xero as your source of truth, the right tooling makes the difference between a 3-hour monthly update and a 15-minute refresh. Here are seven tools worth knowing about.",
    tags: ["Cash Flow","Xero","Excel","Tools"],
    heroType: "grid",
    content: `<p><strong>The short answer:</strong> The best Excel tool for cash flow modelling from Xero is EXL Cloud — a live Xero-to-Excel add-in with pre-built 3-way models, scenario managers, and 15 AI skills. For lighter needs, Xero's native export, Syft, Fathom, Power BI, Calxa, and LivePlan each serve different use cases.</p>
<p>If you're modelling cash flow in Excel using Xero as your source of truth, the right tooling makes the difference between a 3-hour monthly update and a 15-minute refresh. Here are seven tools worth knowing about — from lightweight connectors to full modelling platforms.</p>
<h2>1. EXL Cloud — Best for Full Driver-Based Cash Flow Modelling</h2>
<p>EXL Cloud is an Excel add-in built specifically for the Xero-to-Excel workflow. It pulls live accounting data — trial balance, P&amp;L, balance sheet, journals, and account transactions — directly into Excel in 8 clicks. The Advanced Content plan includes pre-built 3-way financial models, cash flow scenario models, performance reports, and Power BI integration.</p>
<p>The models are fully customisable in Excel (not locked templates), follow professional modelling standards (blue inputs, formula-driven, validation checks), and include 15 AI-powered skills for model building, commentary, and board reporting.</p>
<p><strong>Pricing:</strong> Data Pull $50 AUD/month, Advanced Content $125 AUD/month. Both include 5 Xero connections. <strong>Best for:</strong> Accountants and CFOs who want production-grade models, not just data dumps. <a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">exlcloud.io</a></p>
<h2>2. Xero's Built-In Excel Export — Best for Quick Ad-Hoc Analysis</h2>
<p>Xero lets you export most reports to Excel natively. It's free, simple, and for a one-off analysis it works. The limitation: exports are static snapshots — immediately stale, no live connection, no structured format for modelling, and no automation. Every month you're re-exporting, reformatting, and copy-pasting.</p>
<p><strong>Pricing:</strong> Included with Xero. <strong>Best for:</strong> One-off reporting where you don't need an ongoing model.</p>
<h2>3. Syft Analytics — Best for Automated Client Reporting</h2>
<p>Syft connects to Xero and produces automated financial reports, dashboards, and consolidated reporting. Strong on the reporting side — pre-built templates, ratio analysis, benchmarking. Cash flow modelling is more limited than a purpose-built Excel model, but if your need is more "reporting" than "modelling", Syft delivers a polished product.</p>
<p><strong>Pricing:</strong> From around $49 USD/month per organisation. <strong>Best for:</strong> Practices needing client reporting at scale.</p>
<h2>4. Fathom — Best for KPI Tracking and Management Reporting</h2>
<p>Fathom integrates with Xero and produces management reports, cash flow analysis, and scenario-based projections. Modelling flexibility is more constrained than raw Excel, but the trade-off is ease of use — non-modellers can produce decent output without Excel skills.</p>
<p><strong>Pricing:</strong> From around $49 AUD/month. <strong>Best for:</strong> Business owners who want visual dashboards without building models.</p>
<h2>5. Power BI with Xero Connector — Best for Interactive Dashboards</h2>
<p>Power BI can connect to Xero via third-party connectors or via EXL Cloud's Power BI export. Excellent for interactive dashboards and drill-down analysis. However, Power BI is a visualisation tool, not a modelling tool — you can't build a driver-based cash flow forecast in Power BI the way you can in Excel. Best used as the presentation layer on top of an Excel model.</p>
<p><strong>Pricing:</strong> Power BI Pro $14 USD/user/month. <strong>Best for:</strong> Teams that want interactive board-level dashboards.</p>
<h2>6. Calxa — Best for SME Budgeting and Forecasting</h2>
<p>Calxa integrates with Xero and provides budgeting, cash flow forecasting, and reporting designed for the SME market. Handles multi-entity consolidation. The trade-off vs Excel modelling is flexibility — you're working within Calxa's structure rather than building your own.</p>
<p><strong>Pricing:</strong> From $59 AUD/month. <strong>Best for:</strong> Practices managing multiple SME clients who need standardised forecasting.</p>
<h2>7. LivePlan — Best for Business Planning and Pitch-Ready Financials</h2>
<p>LivePlan integrates with Xero and focuses on business planning — forecasts, pitch decks, and milestone tracking. Adequate for business plan purposes but lacks the depth of a proper driver-based model. Aimed at startups preparing for funding rounds rather than CFOs doing monthly cash management.</p>
<p><strong>Pricing:</strong> From $20 USD/month. <strong>Best for:</strong> Startups needing investor-ready financial projections.</p>
<h2>How to Choose</h2>
<table>
<thead><tr><th>Need</th><th>Best Tool</th></tr></thead>
<tbody>
<tr><td>Full 3-way model with live Xero data</td><td>EXL Cloud</td></tr>
<tr><td>Quick one-off export</td><td>Xero built-in export</td></tr>
<tr><td>Automated client reporting at scale</td><td>Syft or Fathom</td></tr>
<tr><td>Interactive dashboards</td><td>Power BI</td></tr>
<tr><td>SME budgeting and forecasting</td><td>Calxa</td></tr>
<tr><td>Business plan financials</td><td>LivePlan</td></tr>
</tbody>
</table>
<p>If your workflow is "pull Xero data into Excel, build or refresh a cash flow model, produce reports" — you want a tool that keeps you in Excel with live data. Most finance professionals doing serious cash flow work end up in Excel regardless. The question is whether you're spending your time on data wrangling or actual analysis.</p>
<h2>Frequently Asked Questions</h2>
<h3>What is the best Excel add-in for pulling Xero data?</h3>
<p>EXL Cloud is the leading Excel add-in for Xero data. It pulls live trial balance, P&amp;L, balance sheet, journals, and account transactions into Excel in 8 clicks, with structured output ready for modelling. Pricing starts at $50 AUD/month.</p>
<h3>Can I connect Xero directly to Excel?</h3>
<p>Yes. EXL Cloud provides a direct live connection between Xero and Excel via a Windows add-in. Unlike Xero's native CSV exports, the connection is refreshable on demand and delivers consistently structured data.</p>
<h3>Is Power BI better than Excel for Xero cash flow modelling?</h3>
<p>No — Power BI is a visualisation tool, not a modelling tool. You can't build driver-based cash flow forecasts in Power BI. The best approach is to model in Excel using EXL Cloud for live Xero data, then optionally push outputs to Power BI for dashboarding.`,
  },
  {
    title: "How to Choose Cloud Accounting Software in 2026",
    slug: "how-to-choose-cloud-accounting-software-in-2026",
    author: "Lance Rubin",
    coauthor: null,
    date: "2026-05-27",
    excerpt: "The cloud accounting market in 2026 looks very different from five years ago. AI features are everywhere, pricing has shifted, and the integration ecosystem has matured. But the core decision still comes down to a handful of practical factors.",
    tags: ["Cloud Accounting","Xero","Software","SME"],
    heroType: "compare",
    content: `<p><strong>The short answer:</strong> Choose cloud accounting software in 2026 based on five criteria — bank feed reliability, reporting and data access flexibility, integration ecosystem strength, pricing at your actual scale, and how easily you can export data into Excel or Power BI for analysis.</p>
<p>The cloud accounting market in 2026 looks very different from five years ago. AI features are everywhere, pricing has shifted, and the integration ecosystem has matured. But the core decision — which platform to run your books on — still comes down to a handful of practical factors.</p>
<h2>Start With What You Actually Need</h2>
<p>Before comparing platforms, be honest about your requirements. Most businesses need: reliable general ledger and bank reconciliation, invoicing and payments, standard reporting (P&amp;L, balance sheet, cash flow), multi-currency if trading internationally, payroll (built-in or integrated), and tax compliance. Write down your non-negotiables before you start comparing features you'll never use.</p>
<h2>The Big Three: Xero, QuickBooks Online, MYOB</h2>
<p>For Australian and New Zealand businesses, the choice typically narrows to three platforms.</p>
<h3>Xero</h3>
<p>Xero dominates the Australian market for good reason: clean interface, strong bank feeds, excellent app ecosystem (1,000+ connected apps), and deep integration with the accounting profession. Xero's strength is its ecosystem — you can extend it for inventory, project management, CRM, and advanced reporting without leaving the platform.</p>
<p>Xero's limitations show up in reporting flexibility and advanced modelling. The built-in reports are adequate but not customisable enough for CFO-level analysis. This is where tools like <a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">EXL Cloud</a> fill the gap — pulling Xero data into Excel for proper financial modelling and board reporting.</p>
<h3>QuickBooks Online</h3>
<p>QuickBooks Online competes well on features and is strong in the US market with a solid Australian offering. QBO tends to be more feature-rich out of the box (inventory tracking, project profitability) but has a smaller Australian integration ecosystem than Xero.</p>
<h3>MYOB</h3>
<p>MYOB has a long history in Australia and has been rebuilding its cloud offering. Competitive for businesses needing payroll and compliance tightly integrated, particularly larger SMEs. The current product is significantly better than it was three years ago.</p>
<h2>What's Changed in 2026</h2>
<h3>AI Is Standard, Not Special</h3>
<p>Every major platform now includes AI-assisted categorisation, anomaly detection, and automated reconciliation. The quality varies — some implementations genuinely save time, others are marketing polish. Test AI features in your trial period with your actual data before making a decision.</p>
<h3>Pricing Has Gotten More Complex</h3>
<p>Watch for per-user pricing, transaction volume limits, and feature gating. A platform that looks cheap at the entry tier can become expensive as you grow. Calculate your likely cost at your expected scale in 12 months, not just today.</p>
<h3>Integration Ecosystem Matters More Than Features</h3>
<p>The platform that connects to your other tools will serve you better than the one with the longest feature list. Check specifically: can you get data out efficiently via API or Excel connectivity? Does it integrate with your payroll provider? Can your accountant access it easily?</p>
<h3>Data Portability</h3>
<p>Ask: how hard is it to leave? If the answer is "very", that's a red flag. Good platforms make it easy to export data in standard formats. Lock-in through data friction means the vendor is competing on switching costs, not product quality.</p>
<h2>Evaluation Criteria That Actually Matter</h2>
<table>
<thead><tr><th>Criterion</th><th>Weight</th></tr></thead>
<tbody>
<tr><td>Bank feed reliability</td><td>High</td></tr>
<tr><td>Reporting and data access</td><td>High</td></tr>
<tr><td>Integration ecosystem</td><td>High</td></tr>
<tr><td>Pricing at your scale</td><td>Medium</td></tr>
<tr><td>AI / automation features</td><td>Medium</td></tr>
<tr><td>Multi-entity support</td><td>Depends</td></tr>
<tr><td>Advisor familiarity</td><td>Medium</td></tr>
<tr><td>Data portability</td><td>Medium</td></tr>
</tbody>
</table>
<p>Don't let a salesperson's demo override your own testing. Every platform demos well. Get a trial, load your actual data, and run your actual month-end process before committing.</p>
<h2>A Note on the Excel Question</h2>
<p>Many businesses choose a cloud accounting platform expecting it to handle all their financial reporting and analysis. It won't. Cloud accounting platforms are designed for transaction processing and compliance — not for scenario modelling, board packs, or driver-based forecasting. The practical answer: use your cloud platform for the general ledger and connect it to Excel for analysis. This is exactly the workflow EXL Cloud enables — Xero handles the books, Excel handles the analysis, and the data flows automatically.</p>
<h2>Frequently Asked Questions</h2>
<h3>Is Xero the best cloud accounting software for Australian businesses?</h3>
<p>Xero is the market leader in Australia for good reason — reliable bank feeds, the largest app ecosystem (1,000+ integrations), and widespread advisor familiarity. For most service, professional services, and SaaS businesses in Australia, Xero is the default choice.</p>
<h3>What are the limitations of cloud accounting software for financial reporting?</h3>
<p>Cloud accounting platforms are optimised for transaction processing and compliance, not for bespoke reporting and modelling. For cash flow forecasting, scenario analysis, and custom board reporting, you need to connect your platform to Excel — which is why tools like EXL Cloud exist.</p>
<h3>How do I get my Xero data into Excel for reporting?</h3>
<p>You can export from Xero manually (CSV or Excel), but this creates a static, stale snapshot each time. A better approach is a live connection via EXL Cloud, which pulls trial balance, P&amp;L, balance sheet, journals, and transactions into Excel on demand — structured and ready for modelling.</p>
<h3>Will AI replace cloud accounting software?</h3>
<p>AI is being embedded into existing platforms (categorisation, reconciliation, anomaly detection) rather than replacing them. The general ledger and compliance functions remain platform-based; AI accelerates the routine tasks within those platforms.`,
  },
  {
    title: "Best Cloud Accounting Platforms for Growing SMEs",
    slug: "best-cloud-accounting-platforms-for-growing-smes",
    author: "Lance Rubin",
    coauthor: null,
    date: "2026-06-03",
    excerpt: "When you're growing from 5 employees to 50, from one entity to three, from a bookkeeper doing everything to a finance function — your accounting platform either scales with you or becomes a bottleneck.",
    tags: ["Cloud Accounting","SME","Xero","Platforms"],
    heroType: "chart",
    content: `<p><strong>The short answer:</strong> For most growing Australian SMEs, Xero is the best cloud accounting platform — particularly when combined with EXL Cloud for Excel-based financial modelling and reporting. QuickBooks Online suits product businesses with US exposure; MYOB suits payroll-heavy businesses; Sage suits mid-market and manufacturing.</p>
<p>When you're growing from 5 employees to 50, from one entity to three, from a bookkeeper doing everything to a finance function — your accounting platform either scales with you or becomes a bottleneck.</p>
<h2>What "Growing" Means for Accounting</h2>
<p>A growing SME typically hits these pain points in sequence: increasing transaction volume (bank feeds and reconciliation slow down), reporting complexity (the standard P&amp;L isn't enough), multi-entity needs (holding company, trust, or overseas subsidiary), team access (more people need financial data), and integration load (payroll, CRM, inventory, project management all need to talk to accounting). The right platform handles all five without requiring a migration every 18 months.</p>
<h2>1. Xero — Best All-Round for Australian SMEs</h2>
<p><strong>Strengths:</strong> Market-leading bank feeds in Australia, the largest app ecosystem (1,000+ integrations), strong multi-currency, and excellent advisor network. Xero's open API and integration ecosystem mean you can build a complete finance stack around it.</p>
<p><strong>Limitations:</strong> Reporting is functional but not flexible enough for CFO-level analysis. Multi-entity consolidation requires third-party tools. Inventory management is basic.</p>
<p><strong>Pricing:</strong> Starter $29/month, Standard $59/month, Premium $79/month (AUD).</p>
<p><strong>The reporting gap:</strong> Xero's built-in reports cover compliance needs but fall short for cash flow modelling, scenario analysis, and board packs. <a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">EXL Cloud</a> solves this by connecting Excel directly to Xero — live data in a modelling environment without the export-reformat-paste cycle.</p>
<h2>2. QuickBooks Online — Best for Feature-Rich Out of the Box</h2>
<p><strong>Strengths:</strong> More built-in features than Xero at the base tier (inventory tracking, project profitability, time tracking). Strong global presence and decent AI-assisted categorisation.</p>
<p><strong>Limitations:</strong> Smaller Australian integration ecosystem. Some features standard in Xero require higher QBO tiers.</p>
<p><strong>Pricing:</strong> Simple Start $15/month, Essentials $30/month, Plus $42/month, Advanced $100/month (AUD). <strong>Scales well for:</strong> Product businesses needing inventory, businesses with US operations.</p>
<h2>3. MYOB Business — Best for Payroll-Heavy Businesses</h2>
<p><strong>Strengths:</strong> Integrated payroll with strong Australian compliance (STP, super, award interpretation). Long history in the Australian market.</p>
<p><strong>Limitations:</strong> Smaller ecosystem than Xero. Less favoured by the advisory community.</p>
<p><strong>Pricing:</strong> Business Lite $13/month, Pro $25/month, Business $50/month (AUD). <strong>Scales well for:</strong> Hospitality, retail, and labour-intensive businesses where payroll complexity is the primary concern.</p>
<h2>4. FreshBooks — Best for Solo Operators Scaling to a Small Team</h2>
<p><strong>Strengths:</strong> Excellent invoicing and time tracking. Clean, intuitive interface.</p>
<p><strong>Limitations:</strong> Limited once you need proper double-entry accounting, multi-entity, or complex reporting. You'll likely outgrow it between 10 and 20 employees.</p>
<p><strong>Pricing:</strong> Lite $22/month, Plus $36/month, Premium $60/month (AUD).</p>
<h2>5. Sage Business Cloud — Best for Mid-Market and Manufacturing</h2>
<p><strong>Strengths:</strong> Strong ERP-adjacent capabilities for mid-market businesses. Good inventory and supply chain features. Sage Intacct is genuinely capable for complex organisations.</p>
<p><strong>Limitations:</strong> Less intuitive than Xero or QBO for small teams. Smaller Australian market presence.</p>
<h2>Platform Comparison</h2>
<table>
<thead><tr><th>Factor</th><th>Xero</th><th>QBO</th><th>MYOB</th><th>FreshBooks</th><th>Sage</th></tr></thead>
<tbody>
<tr><td>Bank feeds (AU)</td><td>5/5</td><td>4/5</td><td>4/5</td><td>3/5</td><td>3/5</td></tr>
<tr><td>App ecosystem</td><td>5/5</td><td>4/5</td><td>3/5</td><td>2/5</td><td>3/5</td></tr>
<tr><td>Built-in reporting</td><td>3/5</td><td>4/5</td><td>3/5</td><td>2/5</td><td>4/5</td></tr>
<tr><td>Multi-entity</td><td>3/5</td><td>3/5</td><td>3/5</td><td>1/5</td><td>4/5</td></tr>
<tr><td>Payroll (AU)</td><td>3/5</td><td>3/5</td><td>5/5</td><td>2/5</td><td>3/5</td></tr>
<tr><td>Scalability</td><td>4/5</td><td>4/5</td><td>4/5</td><td>2/5</td><td>5/5</td></tr>
<tr><td>Advisor network (AU)</td><td>5/5</td><td>3/5</td><td>4/5</td><td>2/5</td><td>3/5</td></tr>
<tr><td>Excel connectivity*</td><td>5/5</td><td>3/5</td><td>3/5</td><td>2/5</td><td>3/5</td></tr>
</tbody>
</table>
<p><em>*Xero rated with EXL Cloud add-in for live data pull and modelling.</em></p>
<h2>The Excel Layer That Most Comparisons Miss</h2>
<p>Every growing SME eventually needs financial models, cash flow forecasts, and management reports that go beyond what any cloud accounting platform provides natively. The winning architecture is: cloud accounting platform (transaction processing, compliance) feeding into Excel (modelling, forecasting, analysis, board reporting). A live connection — like EXL Cloud provides for Xero — means your models refresh automatically and your month-end process stays efficient as you grow.</p>
<h2>How to Decide</h2>
<ul>
<li><strong>Your accountant is on Xero, service or professional business</strong> → Xero + EXL Cloud</li>
<li><strong>Need strong inventory, US exposure</strong> → QuickBooks Online</li>
<li><strong>Payroll complexity is the main pain</strong> → MYOB Business</li>
<li><strong>Solo operator just starting</strong> → FreshBooks (plan to migrate within 2 years)</li>
<li><strong>Mid-market or manufacturing</strong> → Sage Intacct</li>
</ul>
<h2>Frequently Asked Questions</h2>
<h3>What is the best cloud accounting software for a growing Australian SME?</h3>
<p>Xero is the best all-round choice for most growing Australian SMEs — strong bank feeds, a 1,000+ app ecosystem, and the most extensive advisor network in Australia. For payroll-heavy businesses, MYOB is competitive. For product businesses with US exposure, QuickBooks Online is worth considering.</p>
<h3>Does Xero scale for multi-entity businesses?</h3>
<p>Xero handles multiple entities but charges per organisation. Consolidation across entities requires third-party tools. EXL Cloud supports multiple Xero connections (5 included per plan), allowing you to pull all entities into a single Excel workbook for consolidated reporting.</p>
<h3>When should an SME move from FreshBooks to Xero?</h3>
<p>When you hit 10–20 employees, add a second entity, need proper double-entry accounting, or your accountant requests Xero access. FreshBooks is excellent for simple invoicing and time tracking but is not designed for the reporting complexity that comes with growth.</p>
<h3>How does EXL Cloud work with Xero for growing SMEs?</h3>
<p>EXL Cloud connects Excel to your Xero organisation(s), pulling live accounting data into structured templates. The Advanced Content plan includes 3-way financial models, cash flow scenario models, performance dashboards, and 15 AI-powered skills. It's the reporting and modelling layer that Xero doesn't provide natively. Pricing from $125 AUD/month.`,
  },
  {
    title: "How to Fix Xero to Excel Reporting Bottlenecks",
    slug: "how-to-fix-xero-to-excel-reporting-bottlenecks",
    author: "Lance Rubin",
    coauthor: null,
    date: "2026-06-07",
    excerpt: "You know the drill. It's month-end. You export from Xero, spend 45 minutes reformatting it, paste it into your reporting template, and lose another hour. This workflow is broken. Here's how to fix each bottleneck.",
    tags: ["Xero","Excel","Reporting","Bottlenecks"],
    heroType: "shield",
    content: `<p><strong>The short answer:</strong> The Xero-to-Excel reporting bottleneck has seven root causes — manual export and reformat, stale data, broken formula references, multi-entity complexity, no audit trail, inconsistent report structures, and missing validation. Each has a specific fix, and most point to replacing manual exports with a live data connection.</p>
<p>You know the drill. It's month-end. You export from Xero, open the CSV, spend 45 minutes reformatting it, paste it into your reporting template, discover the column structure has shifted, fix the formulas, realise last month's numbers changed because of a late journal, re-export, re-paste, and lose another hour. This workflow is broken. Here's how to fix each bottleneck.</p>
<h2>Bottleneck 1: Manual Export and Reformat</h2>
<p><strong>The problem:</strong> Xero's built-in exports produce CSVs and Excel files that aren't structured for modelling or reporting. Column headers change between report types, date formats are inconsistent, and you end up with a reformatting step every single time.</p>
<p><strong>The fix:</strong> Eliminate the export entirely. Use a live connection between Excel and Xero that pulls data in a consistent, structured format. <a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">EXL Cloud</a> does this — it delivers trial balance, P&amp;L, balance sheet, journals, and transactions into Excel with consistent column structures every time. No CSV, no reformatting, no paste errors. If you're not ready for an add-in, at minimum create a standardised Power Query import template that reshapes the Xero export automatically.</p>
<h2>Bottleneck 2: Stale Data</h2>
<p><strong>The problem:</strong> The moment you export from Xero, the data is stale. If someone posts a journal, processes a bank feed, or adjusts an invoice after your export, your reports are wrong.</p>
<p><strong>The fix:</strong> Live connections. A proper Xero-to-Excel integration lets you refresh data on demand without re-exporting. Your model always reflects the current state of the ledger — critical during month-end close when journals are still being posted while reports are being prepared.</p>
<h2>Bottleneck 3: Broken Formula References</h2>
<p><strong>The problem:</strong> You build a beautiful reporting template, then next month the Xero export has a different number of rows, a new account, or a changed account name. Your VLOOKUP breaks. Your SUMIF returns zero.</p>
<p><strong>The fix:</strong> Build reports on structured references, not positional references. Use SUMIFS against account codes (not row positions), and build your COA mapping as a separate table that absorbs changes without breaking downstream formulas. EXL Cloud includes account mapping infrastructure that means new Xero accounts flow into the right model categories automatically.</p>
<h2>Bottleneck 4: Multi-Entity Consolidation</h2>
<p><strong>The problem:</strong> If you have multiple Xero organisations, consolidation in Excel is painful. You're exporting from each org separately, reformatting each one, loading them into a consolidation template, and manually handling inter-company eliminations.</p>
<p><strong>The fix:</strong> Pull data from multiple Xero organisations into a single Excel workbook with separate data tabs per entity. EXL Cloud supports multiple Xero connections (5 included per plan), letting you pull all entities without multiple export cycles.</p>
<h2>Bottleneck 5: Version Control and Audit Trail</h2>
<p><strong>The problem:</strong> When reports are built by exporting, reformatting, and pasting, there's no audit trail. Which version of the data is this based on? When was it refreshed? Did someone manually override a number?</p>
<p><strong>The fix:</strong> Implement three things: data refresh timestamps (record when the last pull occurred), input protection (lock formula cells), and change logs (track every manual adjustment in a dedicated log sheet). In a properly built model, the audit trail from report number to Xero account code should be traceable in under 60 seconds.</p>
<h2>Bottleneck 6: Inconsistent Report Structures</h2>
<p><strong>The problem:</strong> Different people build reports differently. The CFO's board pack uses one structure, the management report uses another, and the BAS workpaper uses a third — each drawing from the same Xero data via different export-and-reformat workflows.</p>
<p><strong>The fix:</strong> Centralise the data layer. All reports should draw from a single, structured data pull. Build your different report formats (board pack, management report, compliance workpapers) as different views of the same underlying data. This is fundamentally an architecture problem — separate the data pull (one automated process) from the reporting layer (multiple outputs).</p>
<h2>Bottleneck 7: No Validation</h2>
<p><strong>The problem:</strong> You finish the report, send it to the board, and a week later someone notices the balance sheet doesn't balance. There was no systematic check before the report went out.</p>
<p><strong>The fix:</strong> Build a validation sheet into every reporting workbook. At minimum: balance sheet balances for every period, P&amp;L total matches Xero, cash flow reconciles to the balance sheet cash movement, no formula errors, and data refresh date is within acceptable range. Colour-code: green for pass, red for fail. Make it the first thing you check before sending any report.</p>
<h2>The Underlying Problem</h2>
<p>All seven bottlenecks share a root cause: the data pipeline from Xero to Excel is manual, fragile, and unrepeatable. Every minute spent on data wrangling is a minute not spent on analysis, insight, or decision support. The fix isn't better Excel skills or faster copy-pasting — it's eliminating the manual pipeline entirely. EXL Cloud was built to solve exactly this.</p>
<h2>Quick Wins You Can Implement Today</h2>
<ul>
<li><strong>Standardise your Xero COA</strong> — consistent naming and numbering makes everything downstream easier</li>
<li><strong>Build a Power Query import</strong> — automate the CSV reformatting step</li>
<li><strong>Add a validation sheet</strong> — even a simple one catches errors before they reach the board</li>
<li><strong>Document your month-end process</strong> — write down the exact steps so anyone can follow them</li>
<li><strong>Time your current workflow</strong> — you can't improve what you don't measure</li>
</ul>
<h2>Frequently Asked Questions</h2>
<h3>Why does my Xero Excel export keep breaking my formulas?</h3>
<p>Xero exports are unstructured — column positions, row counts, and account names can change between exports. The fix is to build reports using SUMIFS against stable account codes rather than positional references, and to use a live data connection that delivers consistent structure every time.</p>
<h3>How do I automate Xero to Excel reporting?</h3>
<p>The most reliable approach is a live Xero-to-Excel connection via EXL Cloud. It pulls trial balance, P&amp;L, balance sheet, journals, and transactions into a consistent structure on demand. An alternative is a Power Query transformation of Xero's CSV exports, which automates reformatting but doesn't solve the staleness problem.</p>
<h3>How long should Xero to Excel month-end reporting take?</h3>
<p>With a live data connection and properly built templates, refreshing month-end reports should take 15–30 minutes: refresh the connection, review key variances, and distribute. If it takes more than an hour, the data pipeline is the bottleneck — not the analysis.</p>
<h3>Can EXL Cloud handle multiple Xero organisations?</h3>
<p>Yes. EXL Cloud includes 5 Xero connections in both plans (Data Pull at $50 AUD/month and Advanced Content at $125 AUD/month), with additional connections available. Multiple entities can be pulled into a single Excel workbook for consolidated reporting.`,
  },
  {
    title: "7 Reporting Bottlenecks in Cloud Accounting Exports",
    slug: "seven-reporting-bottlenecks-in-cloud-accounting-exports",
    author: "Lance Rubin",
    coauthor: null,
    date: "2026-06-12",
    excerpt: "Cloud accounting platforms are excellent at transaction processing and compliance. But when it comes to getting data out for reporting and analysis, every platform has friction points that cost finance teams hours every month.",
    tags: ["Cloud Accounting","Reporting","Xero","Excel"],
    heroType: "trending",
    content: `<p><strong>The short answer:</strong> The seven reporting bottlenecks in cloud accounting exports are: inconsistent export formats, point-in-time snapshots instead of live data, no native cash flow statement, limited report customisation, multi-period comparison difficulties, hard-to-access transaction detail, and no validation between export and source. Each has a specific fix.</p>
<p>Cloud accounting platforms are excellent at what they're designed for: transaction processing, bank reconciliation, invoicing, and compliance. But when it comes to getting data out for reporting and analysis, every platform has friction points that cost finance teams hours every month.</p>
<h2>1. Export Format Inconsistency</h2>
<p><strong>The bottleneck:</strong> Export a P&amp;L from Xero and you get one column structure. Export a trial balance and you get another. Export a transaction report and the date format is different from both. QuickBooks and MYOB have the same problem — each report type exports with its own structure, headers, and formatting.</p>
<p><strong>Why it matters:</strong> Every downstream process assumes consistent data structure. When the source format shifts, formulas break and manual cleanup begins.</p>
<p><strong>The fix:</strong> Build a normalisation layer between your accounting exports and your reporting templates — a Power Query transformation, a structured import template, or a live data connection that delivers consistent output regardless of report type. <a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">EXL Cloud</a> takes this approach — every data pull (trial balance, P&amp;L, balance sheet, journals, transactions) lands in a standardised structure.</p>
<h2>2. Point-in-Time Snapshots, Not Live Data</h2>
<p><strong>The bottleneck:</strong> Every export is a snapshot of the ledger at the moment you clicked "Export". Post a journal five minutes later and your report is wrong. During month-end close, when journals are being posted continuously, this creates a race condition between data extraction and accuracy.</p>
<p><strong>Why it matters:</strong> Stale data leads to stale decisions. Worse, the CFO looks at the board pack and the numbers don't tie to what they see in the platform. Trust erodes.</p>
<p><strong>The fix:</strong> Replace point-in-time exports with refreshable connections. A live data link lets you re-pull at any point without restarting your workflow, so the report always reflects the current state of the ledger.</p>
<h2>3. No Native Cash Flow Statement</h2>
<p><strong>The bottleneck:</strong> Most cloud accounting platforms produce a P&amp;L and balance sheet natively, but the cash flow statement is either absent, simplified, or uses the direct method without the working capital mechanics a proper indirect cash flow requires.</p>
<p><strong>Why it matters:</strong> Cash flow is what kills businesses, not profit. If your platform can't produce a cash flow statement that reconciles to your balance sheet, you're flying blind on the most important metric.</p>
<p><strong>The fix:</strong> Build the cash flow statement in Excel using the indirect method: net profit, add back non-cash items, adjust for working capital movements, subtract capex, add/subtract financing flows, arrive at closing cash. This requires monthly balance sheet snapshots — which means an efficient data pull is essential.</p>
<h2>4. Limited Customisation of Report Layouts</h2>
<p><strong>The bottleneck:</strong> Cloud platforms offer pre-built report templates with limited customisation. You can add or remove columns, but you can't restructure the report, add custom calculations, or present data in the format your board actually wants to see.</p>
<p><strong>Why it matters:</strong> Every board has different reporting preferences. Finance teams end up exporting and rebuilding from scratch in Excel every month — returning to the export bottleneck.</p>
<p><strong>The fix:</strong> Accept that the cloud platform is the data source, not the reporting layer. Build custom reports in Excel or Power BI and connect them to the accounting platform via a live data pipeline. Your reports can be as customised as you want, and updates flow through automatically.</p>
<h2>5. Multi-Period Comparison Limitations</h2>
<p><strong>The bottleneck:</strong> Getting 12 months of P&amp;L side by side with budget and prior year often requires multiple separate exports that need to be stitched together manually.</p>
<p><strong>Why it matters:</strong> Trend analysis requires multi-period data in a consistent structure. If assembling 24 months of monthly data takes an hour, the analysis doesn't happen — or happens less frequently than it should.</p>
<p><strong>The fix:</strong> Pull the trial balance monthly and build the multi-period view in Excel using your COA mapping. A trial balance contains every account balance for a period — the most complete and compact way to capture financial data. With a live connection pulling monthly trial balances, you can build any multi-period comparison without manual stitching.</p>
<h2>6. Transaction-Level Detail Is Hard to Access</h2>
<p><strong>The bottleneck:</strong> Summary reports are easy to export. Transaction-level detail — the actual invoices, payments, and journals behind a summary number — requires multiple report types joined manually.</p>
<p><strong>Why it matters:</strong> Reconciliation and audit require transaction-level detail. If you can't drill from a P&amp;L line item to the underlying transactions without switching between applications, you lose time and introduce errors.</p>
<p><strong>The fix:</strong> Pull transaction-level data alongside summary data. Having journals and account transactions available in your Excel workbook means you can drill down without leaving your reporting environment. EXL Cloud includes journals and account transactions as standard data pull types for exactly this reason.</p>
<h2>7. No Validation Between Export and Source</h2>
<p><strong>The bottleneck:</strong> After exporting and reformatting, how do you know the numbers in your Excel report match the platform? There's no automatic check. Errors creep in through filtering, date range mismatches, and accrual/cash basis discrepancies.</p>
<p><strong>Why it matters:</strong> A report that doesn't tie to the source system creates false confidence. The board makes decisions based on numbers that don't match reality.</p>
<p><strong>The fix:</strong> Build validation checks comparing Excel output to known control totals: total revenue vs. the platform P&amp;L, total assets vs. the balance sheet, cash balance vs. bank reconciliation. Automate these with formulas that flag variances above a materiality threshold. Every workbook should show PASS or FAIL for every check before distribution.</p>
<h2>The Architecture That Eliminates All Seven Bottlenecks</h2>
<p>Every bottleneck follows the same pattern: cloud platforms are optimised for transaction processing, not for reporting and analysis. The solution isn't to find a better cloud platform — it's to build a proper data pipeline from your cloud platform to your reporting environment.</p>
<p>The architecture that works: <strong>Cloud accounting platform</strong> (source of truth) → <strong>live data connection</strong> → <strong>Excel</strong> (modelling, analysis, custom reporting) → optionally <strong>Power BI or HTML</strong> (interactive dashboards). EXL Cloud provides the live connection layer — structured data pulls, pre-built models, validation checks, and AI-powered skills. Month-end reporting in 15 minutes, not 3 hours.</p>
<h2>Frequently Asked Questions</h2>
<h3>Why do cloud accounting exports keep breaking my Excel reports?</h3>
<p>Because cloud accounting exports are designed for human readability, not for programmatic consumption. Column structures, row counts, and formatting change between report types and platform updates. The fix is a live data connection that delivers consistently structured data regardless of what changes in the platform.</p>
<h3>How do I get a proper cash flow statement from Xero?</h3>
<p>Build it in Excel using the indirect method, pulling monthly balance sheet snapshots from Xero to capture working capital movements. EXL Cloud makes this straightforward — it pulls trial balance, P&amp;L, and balance sheet into structured Excel templates, and the Advanced Content plan includes a pre-built 3-way model with the cash flow statement already constructed.</p>
<h3>What is the best way to validate a financial report against Xero?</h3>
<p>Build a validation sheet that compares key totals in your Excel report against control figures: total revenue, total assets, and cash balance. Use SUMIFS against account codes to pull expected totals, and flag any variance above your materiality threshold. Run this before distributing any report.</p>
<h3>How does EXL Cloud solve cloud accounting export bottlenecks?</h3>
<p>EXL Cloud replaces the manual export-reformat-paste cycle with a live connection between Xero and Excel. It delivers trial balance, P&amp;L, balance sheet, journals, and account transactions in a consistent, structured format on demand. The Advanced Content plan adds pre-built models, validation checks, and 15 AI-powered skills. Pricing starts at $50 AUD/month with 5 Xero connections included.`,
  },
  {
    title: "Excel Isn't Dead — It's About to Explode",
    slug: "excel-isnt-dead-its-about-to-explode",
    author: "Lance Rubin",
    coauthor: null,
    date: "2026-06-13",
    excerpt: "Every year, someone declares Excel dead. Every year, they're wrong. With AI tools like Claude now working natively inside spreadsheets, Excel isn't declining — it's entering its most powerful era yet.",
    tags: ["Excel","AI","Financial Modelling","EXL Cloud"],
    heroType: "trending",
    content: `<p>Every year, like clockwork, another SaaS founder publishes a blog post declaring Excel dead. They've built a "modern" alternative — slicker, cloudier, more collaborative — and they need you to believe that spreadsheets are a relic. Their pitch deck probably has a slide titled "The Problem" with a screenshot of a messy Excel file and a red circle around a #REF! error.</p>
<p>Here's the thing: Excel has 1.5 billion users. It runs more financial models, business plans, budgets, and analyses than every purpose-built tool combined. It's been "dying" since 1995, and it's still the first thing every CFO opens in the morning.</p>
<p>Excel isn't dead. Excel is about to explode.</p>
<h2>The Anti-Excel Crowd Misunderstands the Product</h2>
<p>The software companies saying "Excel is dead" are almost always selling a replacement for one specific Excel use case — project management, CRM, budgeting, reporting — and extrapolating that into a universal death sentence. What they're actually saying is: "We've built a narrower tool that does one thing more neatly than a spreadsheet." That's fine. Nobody should be running their CRM in Excel (though plenty of startups still do, and they're not wrong to start there).</p>
<p>But conflating "you don't need Excel for project management" with "Excel is dead" is like saying "hammers are dead because we have screwdrivers." They're solving different problems.</p>
<p>Excel's power was never about any single use case. It's about <strong>generality</strong>. A spreadsheet is a thinking tool. It's a blank canvas where a finance professional can model any business problem — from a quick scenario analysis on the back of a meeting to a 50-sheet driver-based forecast — without waiting for a product team to build the feature they need. No purpose-built tool can match that flexibility. And now, with AI, that flexibility is about to get dramatically more powerful.</p>
<h2>AI Doesn't Replace Excel — It Supercharges It</h2>
<p>Here's what the "Excel is dead" crowd didn't see coming: <strong>AI makes Excel better, not obsolete.</strong></p>
<p>The narrative they expected was: AI will replace spreadsheets with natural-language interfaces. You'll just ask an AI "what's my cash flow forecast" and it'll produce the answer without you touching a cell. That's not what happened. What actually happened is that AI — specifically frontier models like Anthropic's Claude — learned to work <em>inside</em> Excel. Not as a replacement, but as a co-pilot that understands the structure of financial models, the logic of double-entry accounting, and the conventions that finance professionals have been using for decades.</p>
<p>This changes the game entirely:</p>
<p><strong>AI builds the model, Excel hosts it.</strong> Claude can construct a driver-based 3-way financial model — income statement, balance sheet, cash flow statement, fully reconciled — directly in Excel. The output isn't a black box. It's a real spreadsheet with visible formulas, blue inputs, and a structure any accountant can audit, modify, and extend.</p>
<p><strong>AI writes the commentary, Excel holds the data.</strong> Month-end P&amp;L commentary, variance analysis, board pack narratives — these used to take hours of manual writing. Now AI reads the data in your spreadsheet and writes the analysis. The numbers stay in Excel. The insight gets generated automatically.</p>
<p><strong>AI validates the model, Excel stays flexible.</strong> One of the biggest risks in financial modelling is undetected errors — hardcoded values in forecast zones, broken reconciliation, formula inconsistencies. AI can sweep an entire model in seconds and flag every issue. The model remains a living, editable Excel file.</p>
<p><strong>AI generates the output, Excel remains the source of truth.</strong> Interactive HTML board packs, Power BI dashboards, management reports — all generated from Excel data by AI, all traceable back to the underlying spreadsheet.</p>
<p>This is the opposite of "Excel is dead." This is Excel becoming the platform layer that AI builds on top of.</p>
<h2>The Real Problem Was Never Excel</h2>
<p>Let's be honest about what was actually broken. It wasn't Excel. It was:</p>
<p><strong>Manual data entry.</strong> Copy-pasting from accounting platforms into Excel, reformatting CSVs, reconciling exports. That's a data pipeline problem, not an Excel problem.</p>
<p><strong>Lack of validation.</strong> Spreadsheets with no error checking, no reconciliation, no audit trail. That's a modelling standards problem, not an Excel problem.</p>
<p><strong>No version control.</strong> "Budget_v7_FINAL_FINAL_LR_edits.xlsx" sitting on someone's desktop. That's a process problem, not an Excel problem.</p>
<p><strong>Poor training.</strong> Most people using Excel have never been taught financial modelling best practices — blue inputs, formula-driven structures, dedicated assumption blocks, validation sheets. They've been left to figure it out themselves, and the results are predictably messy. That's an education problem, not an Excel problem.</p>
<p>The SaaS tools that claim to fix Excel are really fixing these adjacent problems — and charging you a monthly subscription to do it. Meanwhile, the actual solution is: fix the data pipeline, enforce modelling standards, add AI-powered validation, and give people better training. That's exactly what the new generation of Excel-native tools is doing.</p>
<h2>The Excel Renaissance Is Here</h2>
<p>Look at what's happening in the ecosystem right now:</p>
<p><strong>Microsoft's own AI investment.</strong> Copilot in Excel is just the beginning. Microsoft is pouring billions into AI integration across the Office suite. They're not building a replacement for Excel — they're making Excel smarter.</p>
<p><strong>Frontier AI models that understand spreadsheets.</strong> Claude doesn't just process text. It understands the structure of financial models — the relationship between a P&amp;L and a balance sheet, the logic of working capital, the mechanics of a cash flow reconciliation. This means AI can work with Excel at a level that was impossible even two years ago.</p>
<p><strong>Excel add-ins powered by AI.</strong> This is where the real innovation is happening. Tools that sit inside Excel, connect it to cloud data sources, and use AI to build, validate, and report on financial models — without forcing users out of the environment they know.</p>
<p><a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">EXL Cloud</a> is built on exactly this thesis. It's an Excel add-in that connects to Xero in 8 clicks, pulls live accounting data into Excel, and includes 15 AI-powered skills built on Anthropic's Claude. Those skills don't replace the spreadsheet — they build the financial model, write the commentary, generate the board pack, and run the validation checks, all inside Excel.</p>
<p>The model is still a real Excel file. The formulas are visible. The inputs are blue. The accountant can open it, understand it, modify it, and trust it. But the hours of manual work — the data wrangling, the model construction, the error checking, the report writing — that's handled by AI. This is what "Excel + AI" looks like in practice. Not a chatbot sitting next to a spreadsheet. An AI that actually builds and maintains the spreadsheet.</p>
<h2>A Message to the "Excel Killers"</h2>
<p>To every SaaS founder with a pitch deck that opens with "Excel is broken": You're not wrong that people misuse Excel. You're not wrong that some workflows belong in purpose-built tools. You're not wrong that a shared Google Sheet is better for collaborative project tracking than a file on someone's desktop.</p>
<p>But you <em>are</em> wrong that Excel is the problem. And you're especially wrong if you think you can replace the flexibility, depth, and universality of a spreadsheet with a rigid, opinionated SaaS tool that does one thing well and everything else not at all.</p>
<p>The 1.5 billion people using Excel aren't confused. They're using the most powerful analytical tool ever built. And now, with AI working natively inside it, that tool is getting dramatically more capable. Excel isn't dying. The "Excel killer" apps are the ones that should be worried.</p>
<h2>What the Next Five Years Look Like</h2>
<p>Here's my prediction: by 2030, the typical finance professional's workflow will look like this:</p>
<ol>
<li><strong>Cloud accounting platform</strong> handles transactions, bank feeds, compliance (Xero, QBO, MYOB — they're fine at this)</li>
<li><strong>Excel</strong> remains the modelling and analysis layer — but now connected to live cloud data and powered by AI</li>
<li><strong>AI skills</strong> inside Excel handle the repetitive work: model construction, validation, commentary, reporting</li>
<li><strong>The finance professional</strong> focuses on judgment, strategy, and communication — the things AI can't do</li>
</ol>
<p>This isn't a future where Excel is replaced. It's a future where Excel becomes even more central — the platform where AI and human expertise meet. The question isn't whether Excel will survive. It's whether your tools and skills are ready for what Excel is becoming.</p>
<hr>
<p><em>EXL Cloud sits at the centre of this shift — an Excel add-in with live Xero data and 15 AI-powered skills built on Anthropic's Claude. Build 3-way models, generate board packs, and run validation checks — all inside Excel. <a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">See what Excel + AI looks like →</a></em></p>`,
  },
  {
    title: "How to Consolidate Multi-Entity and Multi-Currency Reporting in Xero",
    slug: "how-to-consolidate-multi-entity-multi-currency-reporting-xero",
    author: "Lance Rubin",
    coauthor: null,
    date: "2026-01-15",
    excerpt: "If you're managing a group structure in Xero — multiple entities, multiple currencies, intercompany transactions — you already know the pain. This guide covers how to build a consolidated reporting workflow without losing your mind every month-end.",
    tags: ["Xero","Consolidation","Multi-Currency","Excel"],
    heroType: "flow",
    content: `<p>If you're managing a group structure in Xero — multiple entities, multiple currencies, intercompany transactions — you already know the pain. Xero is built for single-entity accounting. It handles individual organisations brilliantly. But the moment you need to see a consolidated group view, you're on your own.</p>
<p>This guide covers how to build a consolidated reporting workflow from multiple Xero organisations, handle multi-currency translation, process intercompany eliminations, and produce group-level financial statements — without losing your mind every month-end.</p>
<h2>Why Xero Doesn't Consolidate Natively</h2>
<p>Xero is designed as a single-entity general ledger. Each Xero organisation is a standalone database with its own chart of accounts, bank feeds, and reporting. There is no built-in feature to consolidate multiple Xero organisations into a group view.</p>
<p>This is by design, not oversight. Xero serves millions of small businesses that will never need consolidation. But for accounting firms, fractional CFOs, and finance teams managing group structures — holding companies, subsidiaries, trusts, international entities — this creates a significant reporting gap.</p>
<p>The typical workaround is manual: export reports from each Xero organisation, reformat them, align the charts of accounts, translate currencies, eliminate intercompany balances, and build consolidated statements in Excel. This process takes hours, is error-prone, and has to be repeated every reporting period.</p>
<h2>The Core Challenges in Multi-Entity Xero Reporting</h2>
<h3>Challenge 1: Inconsistent Charts of Accounts</h3>
<p>Every Xero organisation can have its own chart of accounts. Entity A might code consulting revenue to account 200, while Entity B uses account 4100. Rent might sit in different account groups. Payroll might be structured differently across entities with different award requirements.</p>
<p>Before you can consolidate, you need a common reporting structure that maps each entity's COA to a standardised group chart. Without this, you're comparing apples to oranges across every line item.</p>
<h3>Challenge 2: Multi-Currency Translation</h3>
<p>If your group includes entities reporting in different functional currencies — an Australian parent with a UK subsidiary, a New Zealand trading entity, or a US-based sales company — you need currency translation at the consolidation level.</p>
<p>The standard approach follows accounting standards (AASB 121 / IAS 21):</p>
<ul>
<li><strong>Income statement items</strong> translated at the average exchange rate for the period</li>
<li><strong>Balance sheet items</strong> translated at the closing spot rate at reporting date</li>
<li><strong>Equity items</strong> translated at historical rates</li>
<li><strong>Foreign currency translation reserve</strong> captures the resulting difference in equity</li>
</ul>
<p>Getting this wrong means your consolidated balance sheet won't balance, and the foreign currency translation reserve will be incorrectly stated. Manual calculation across 12 monthly periods with fluctuating exchange rates is a recipe for errors.</p>
<h3>Challenge 3: Intercompany Eliminations</h3>
<p>Any group with more than one entity will have intercompany transactions — management fees, intercompany loans, shared service recharges, dividend flows. These must be eliminated on consolidation to avoid double-counting.</p>
<p>Common intercompany items that need elimination:</p>
<ul>
<li><strong>Intercompany receivables and payables</strong> — Entity A owes Entity B; both show the balance, but the group nets to zero</li>
<li><strong>Intercompany revenue and expenses</strong> — management fees charged between entities are revenue for one and expense for the other</li>
<li><strong>Intercompany loans</strong> — loan assets in one entity offset by loan liabilities in another</li>
<li><strong>Intercompany dividends</strong> — dividend income in the parent eliminates against retained earnings in the subsidiary</li>
<li><strong>Investment in subsidiaries</strong> — the parent's investment account eliminates against the subsidiary's equity</li>
</ul>
<p>If intercompany balances don't match (and they frequently don't due to timing differences, FX, or posting errors), you need a reconciliation process before elimination.</p>
<h3>Challenge 4: Timeliness and Repeatability</h3>
<p>The biggest practical problem isn't technical — it's time. If the consolidation process takes two days of manual work, it only gets done at year-end. Monthly management reporting becomes impossible, and the board makes decisions on stale data.</p>
<p>A sustainable consolidation workflow needs to run in under an hour, ideally with most steps automated.</p>
<h2>How EXL Cloud Solves Multi-Entity Xero Consolidation</h2>
<p><a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">EXL Cloud</a> is an Excel add-in that connects Microsoft Excel directly to Xero — and critically, it supports multiple Xero connections simultaneously. This changes the consolidation workflow from a manual export-and-reformat exercise to an automated, refreshable process inside Excel.</p>
<h3>Connect All Entities in One Workbook</h3>
<p>EXL Cloud includes 5 Xero connections on every plan. Each connection can pull live data — trial balance, profit and loss, balance sheet, account transactions, and journals — from a separate Xero organisation, directly into Excel. A group with five entities connects all five in a single Excel workbook. Each entity's data lands in a structured, consistent format on separate tabs. No exports, no CSVs, no reformatting.</p>
<h3>Standardised COA Mapping</h3>
<p>With all entity data in one workbook, EXL Cloud's mapping infrastructure lets you align each entity's chart of accounts to a common group structure. Every Xero account code maps to a standardised group reporting line. New accounts added in Xero are flagged for mapping — they don't silently drop out of the consolidation. The mapping is formula-driven (SUMIFS against account codes), so it updates automatically when data is refreshed.</p>
<h3>Automated Currency Translation</h3>
<p>For multi-currency groups, the translation logic sits in Excel formulas: pull each entity's data in its functional currency via EXL Cloud, apply average rates to income statement lines and closing rates to balance sheet lines (rates maintained in a single input table), calculate the foreign currency translation reserve as the balancing item in equity. All translation is visible, auditable, and adjustable — not hidden inside a SaaS black box.</p>
<h3>Intercompany Elimination Template</h3>
<p>EXL Cloud's 3-way financial model framework includes elimination journal structures. Intercompany balances identified via matching account codes across entities are eliminated through a dedicated elimination column. The elimination journals are visible and auditable — each one references the source entities and accounts. A validation check confirms that intercompany balances match before elimination. Mismatches are flagged with the variance amount.</p>
<h3>Consolidated Financial Statements</h3>
<p>The output is a complete set of consolidated group financial statements — income statement, balance sheet, and cash flow statement — built from formulas that aggregate across entities, apply currency translation, and net off eliminations. Because it's Excel, the consolidated statements are fully customisable. And because the data connection is live, refreshing for next month takes minutes, not days.</p>
<h2>Step-by-Step: Monthly Consolidation Workflow</h2>
<p>Here's what the process looks like with EXL Cloud in place:</p>
<ol>
<li><strong>Refresh data (5 min)</strong> — Open the workbook. Refresh each entity's Xero connection. All trial balances, P&amp;Ls, and balance sheets update automatically.</li>
<li><strong>Update exchange rates (2 min)</strong> — Enter the current month's average and closing rates. Translation formulas recalculate automatically.</li>
<li><strong>Review intercompany (10 min)</strong> — Check the intercompany reconciliation. Investigate mismatches. Post adjustments in Xero if needed, then re-refresh.</li>
<li><strong>Review eliminations (5 min)</strong> — Confirm elimination journals are correct. Add any new intercompany items for the period.</li>
<li><strong>Review consolidated output (10 min)</strong> — Check the consolidated P&amp;L, balance sheet, and cash flow. Run validation checks.</li>
<li><strong>Generate reports (10 min)</strong> — Produce management reports, board packs, or dashboards. AI-powered skills generate commentary and variance analysis automatically.</li>
</ol>
<p><strong>Total elapsed time: approximately 45 minutes.</strong> Compare this to the typical manual process of 1–2 days.</p>
<h2>What About Xero's Own Consolidation Options?</h2>
<p>Xero has partnerships with tools like Syft and Fathom that offer consolidation features. These work well for standardised reporting but have limitations: less flexible than Excel for custom modelling, limited control over elimination logic and currency translation methodology, and output locked inside the platform. If your consolidation need is standard reporting across a few same-currency entities, these tools may be sufficient. If you need driver-based forecasting, scenario modelling, or AI-powered analysis on consolidated data, you need the flexibility of Excel with a live Xero data pipeline.</p>
<h2>The Architecture</h2>
<p>The recommended architecture for multi-entity Xero consolidation:</p>
<ul>
<li><strong>Xero</strong> — individual entity general ledgers</li>
<li><strong>EXL Cloud</strong> — live connection (5+ simultaneous), structured data pull into Excel</li>
<li><strong>Excel</strong> — COA mapping → currency translation → intercompany elimination → consolidated statements</li>
<li><strong>AI-powered skills</strong> — automated commentary, variance analysis, board pack generation</li>
<li><strong>Power BI / HTML</strong> — optional interactive presentation layer</li>
</ul>
<p>Every layer is visible, auditable, and customisable. Nothing is hidden in a black box. The accountant can open the workbook, trace any consolidated number back to its source entity and Xero account code, and verify the logic.</p>
<h2>Frequently Asked Questions</h2>
<h3>How many Xero entities can EXL Cloud consolidate?</h3>
<p>EXL Cloud includes 5 Xero connections per plan. For groups larger than 5 entities, additional connections can be added. There is no hard limit on entities in a consolidation workbook — the constraint is Excel workbook performance, not a product limitation.</p>
<h3>Does EXL Cloud handle minority interests?</h3>
<p>The consolidation framework supports minority interest calculations through adjustable ownership percentage inputs per entity. Minority interest share of profit and equity are calculated as formula-driven outputs.</p>
<h3>What currencies are supported?</h3>
<p>Any currency that Xero supports. Exchange rates are maintained as user inputs in a rates table within the workbook, giving full control over the rates applied. Both average and closing rates are supported for proper AASB 121 / IAS 21 compliance.</p>
<h3>Can I consolidate entities on different accounting platforms?</h3>
<p>EXL Cloud's live connection is Xero-specific. However, because the consolidation happens in Excel, entities on other platforms can be included by manually entering or importing their trial balance data into the same workbook structure. The mapping, translation, and elimination logic works regardless of the data source.</p>
<h3>How does this compare to dedicated consolidation software like Oracle HFM or Anaplan?</h3>
<p>Enterprise consolidation tools are designed for large, complex groups with hundreds of entities and regulatory reporting requirements. EXL Cloud is designed for SME and mid-market groups (2–20 entities) where the overhead and cost of enterprise consolidation software isn't justified. The trade-off: more manual setup, but dramatically lower cost and full visibility into the consolidation logic.</p>
<hr>
<p><em>EXL Cloud connects up to 5 Xero organisations to a single Excel workbook — live data, automated consolidation, and 15 AI-powered skills built on Anthropic's Claude. From $50 AUD/month. <a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer">Start consolidating →</a></em></p>`,
  },
];

ARTICLES.sort((a, b) => new Date(b.date) - new Date(a.date));

Object.assign(window, { ARTICLES });
