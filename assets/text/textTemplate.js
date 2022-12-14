const english = {
    // texts displayed in the html
    header: {
        title: 'Survival of the Best Fit',
        subtitle: 'How AI hires like humans',
    },
    about: {
        aboutBody: 'Survival of the Best Fit is a game to demonstrate how blind use of AI in hiring can further perpetuate human bias. In this simulation, users will act as recruiters at a fast-growing company. To reduce costs and maximize output, they would use a new, obscure AI system to replace human recruiters, only to realize that this creates a snowball of problems.\nThis is a project by Gabor Csapo, Jihyun Kim, Miha Klasinc, and Alia ElKattan',
    },
 
    //resources page
 
    resources: {
        title: 'Machines, Bias, and Fairness',
        aboutBiasTitle: 'How does \'machine bias\' work?',
        aboutBias: 'xx\n xxx',
    },
 
    // texts displayed during the game
    titleStage: {
        header: 'Welcome to Qweet!',
        instruction: 'You have been chosen to lead a new department and secured 1 million dollars to hire a new team.',
        responses: [
            'Start Game',
        ],
    },
    instructions: {
        manual: {
            click: 'Click on candidates to see their CVs',
            eval: 'Click Accept to hire a candidate, or Reject to see more new applicants.',
        },
        ml: {
 
        },
    },
 
    smallOfficeStage: {
        subject: 'NEED new hires ASAP!',
        messageFromVc: 'Hi there. It looks I pushed the wrong button and I accidentally fired half of our employees. I need your help to fix that. Do whatever you can to hire new talents ASAP!',
        responses: ['Let\'s start hiring'],
        hiringGoal: 5,
    },
 
    mediumOfficeStage: {
        subject: 'Good start',
        messageFromVc: 'However, the board pressured me for more hires. You\’ll need to hire faster, so pay attention to the clock!',
        responses: [
            'I\'ll hire faster.',
            // 'Hmm, okay.',
        ],
        hiringGoal: 8,
        duration: 90
    },
 
    largeOfficeStage: {
        subject: 'Still not fast enough...',
        messageFromVc: 'Good effort, but you need to hire even faster to fix that mess. Can you pull this off?',
        responses: [
            // 'Of course!',
            'I\'m a bit overwhelmed.',
        ],
        hiringGoal: 12,
        previousStageFailed: 'You ran out of time. The investors want to see results, you\'ll have to hire even more people next month!',
        duration: 90
 
    },
 
    mlTransition: {
        subject: 'Using AI?',
        messageFromVc: 'The board became too bossy here in Qweet...Can you talk to your data scientists to speed things up? I heard AI solves all problems nowadays.',
        responses: [
            'Sure, we can automate it away!',
            // 'Hmm, I will email the engineers.',
        ],
        previousStageFailed: 'This is clearly not working. Talk to your software engineers to see if they can speed things up. Maybe AI is the solution.',
    },
    // add transition here. e-mail from INVESTOR says:  We’ve made good progress, but the faster we grow, the more profit we’ll make. I suggest you use an automated program to help with hiring. Check with the software development team?
 
    // email from SOFTWARE ENGINEER
    conversation: [
        {
            dialogue_step: 1,
            text: 'You asked us how we can hire faster. So we built a hiring algorithm using <i>machine learning</i>. Basically, we will teach a computer to hire like you, but way faster!',
            answer_choice: [
                {
                    text: 'How does that work?',
                    response: '',
                },
                // {
                //     text: 'That\'s great.',
                //     response: 'Perfect! ',
 
                // },
            ],
        },
        {
            dialogue_step: 2,
            text: 'First, the algorithm will read through past applicants\' CVs and whether they were hired or not. It will then learn what makes a candidate good or bad by <u>copying your hiring decision process</u>!',
            answer_choice: [
                {
                    text: 'A machine will think like me?',
                    response: 'Thinking is a strong word. ',
                },
                // {
                //     text: 'Works for me ',
                //     response: 'We have to be careful though.',
                // },
            ],
        },
        {
            dialogue_step: 3,
            text: 'It’s impossible for the program to know good or bad candidates without human input - we first need to give it <u>a lot of data</u> to learn from.',
            answer_choice: [
                {
                    text: 'Where do we get the data?',
                    response: '',
                },
                // {
                //     text: 'How much is a lot?',
                //     response: '',
                // },
            ],
        },
        {
            dialogue_step: 4,
            text: 'I need your help: can you send me the CVs of all applicants you’ve evaluated so far? <u><b>Click</b> on the file</u> named <i>"cv_all.zip"</i> <span class="desktop__folder-icon"></span> on your desktop',
            file_drag: true,
            answer_choice: [],
        },
        {
            dialogue_step: 5,
            text: 'Thanks! Machine learning algorithms get more accurate with more data, so here’s what we’ll do: use big tech companies\' data. They have huge applicant records, so we can merge our CVs with theirs and train our model! \n <u>Choose a company</u> you think hires smart people.',
            dataset_choice: true,
            answer_choice: [
                'Google',
                'Amazon',
                'Facebook',
            ],
        },
        {
            dialogue_step: 6,
            text: 'That\s it! We can now train the algorithm with a lot of past data and put it to use!',
            answer_choice: [
                {
                    text: 'Great, let\'s train it!',
                },
            ],
        },
    ],

        stats_conversation: [
        {
            dialogue_step: 1,
            text: 'We\'re trying to figure out what\'s wrong with the algorithm.',
            answer_choice: [
                {
                    text: 'Let\'s break down its decisions by orange and blue?',
                    response: '',
                },
            ],
        },
        {
            dialogue_step: 2,
            text: 'Here they are; what do you think?',
            stats: true,
            answer_choice: [
                // {
                //     text: 'We\'re rejecting more blue people.',
                //     response: '',
                // },
                {
                    text: 'This isn\'t biased.',
                    response: 'If you look carefully, we have a similar number of equally qualified blue and orange candidates and yet the algorithm accepts a lot more orange. ',
                },
            ],
        },
        {
            dialogue_step: 3,
            text: 'Let\s find out how! Do you remember how we first trained the algorithm?',
            answer_choice: [
                {
                    text: 'I sent you my decisions for the algorithm to mimic me.',
                    response: 'Correct. ',
                },
                // {
                //     text: 'I don\'t care, fix it!',
                //     response: 'The machine was created using your decisions, so I need your help. ',
                // },
            ],
        },
        // {
        //     dialogue_step: 4,
        //     text: 'Let\'s analyze your decisions.',
        //     answer_choice: [
        //         {
        //             text: 'Ok',
        //             response: '',
        //         },
        //         {
        //             text: 'Sure, but I wasn\'t biased',
        //             response: 'You might\'ve not been, but maybe your applicant pool was. ',
        //         },
        //     ],
        // },
        {
            dialogue_step: 5,
            text: 'Look at our data from manual hiring: ',
            stats: true,
            manualStats: true,
            answer_choice: [
                // {
                //     text: 'I hired a lot more orange people.',
                //     response: 'Our algorithm tries to copy our previous hiring, so if you hired more orange people, it \'learns\' to favor them. ',
                // },
                {
                    text: 'I\'m sure I wasn\'t biased!',
                    response: 'I\'m sure you had good intentions, but we had very few blue applicants in our first stage, and so much less were accepted. The algorithm misinterpreted that as them being unfavorable candidates.',
                },
            ],
        },
        {
            dialogue_step: 6,
            text: ' ',
            answer_choice: [
                // {
                //     text: 'We should have checked the data.',
                //     response: 'Yes, I\'m reading that we need to be more careful the origin and statistical analysis of our data',
                // },
                {
                    text: 'But the CVs didn\'t have colors on them!',
                    response: 'It could indirectly learn other elements that differentiate Orange and Blue People, e.g. Orange people usually attend Aristotle University of Thessaloniki while Blue people attend University of Macedonia.',
                },
            ],
        },
        {
            dialogue_step: 7,
            text: 'We should have also checked the quality of the big company dataset you sent me! How am I supposed to understand hiring decisions? I\’m a data scientist!',
            answer_choice: [
                {
                    text: 'We should\'ve worked together more and been more careful...',
                    response: '',
                },
                // {
                //     text: 'We should have worked more together.',
                //     response: '',
                // },
            ],
        },
    ],
 
    mlLabStage: {       
        narration: [
            {
                news: [
                     'Best way to cut costs: use machine learning in everything',
                     'Ambition said to be the most important trait in employees',
                     'Diplomatic or aggressive? Different ways to describe the blue people',
                ],
            },
            {
                messageFromVc: 'You’ve been able to hire at 10x the past rate AND cut costs! Great job, the algorithm seems to be working',
                responses: [
                    'Great to hear!',
                ],
                news: [
                     'Orange Valley Review: Does the future of hiring lie in AI?',
                     'Tech Junkies: Hiring algorithms are the next big thing',
                ],
            },
            {
                launchCVInspector: true,
                messageFromVc: 'I just got a complaint from a past applicant named <u>Elvan Yang</u> asking why they were rejected. Can you look into it?',
                responses: [
                    'I\'ll look for Elvan in the data inspector!',
                    // 'Ok, I\'ll email you with my results.',
                ],
                inspectQuestion: 'So why was Elvan rejected?',
                inspectResponses: [
                    'I have no idea.',
                    // 'Maybe because Elvan is blue?',
                ],
            },
            {
                breaking: true,
                messageFromVc: 'Hey, some reporters are talking about hiring bias, but you’re off the hook since it’s all automated now, right?',
                responses: [
                    'Machines can\'t be biased, right?',
                    // 'Not sure, I\'ll keep an eye on the machine\'s decisions.',
                ],
                news: [
                     'Techountability: Research shows hiring algorithms can inherit human biases against minorities',
                     'Tech Junkies: How do hiring algorithms work?',
                ],
            },
            {
                launchMachineInspector: true,
                messageFromVc: 'I’m hearing that you may be involved with this bias story. Reporters are asking for transparency. Review our evaluation metrics to see if you can go public.',
                responses: [
                    'Let me talk to our data scientists again!',
                    // 'Um, actually... We might have a problem.',
                ],
                inspectQuestion: 'A recent investigation says we discriminate against Blueville residents! How could that be?',
                inspectResponses: [
                    'We trained on more good orange candidates than blue. That made it biased towards orange.',
                    'Maybe the big tech company dataset was full of bias? We should have looked into my training data more.',
                ],
                news: [
                     'Blueville Gazette: Blueville residents treated unfairly by an algorithm?',
                     'The justice: Orange privilege in the tech industry',
                ],
            },
            {
                messageFromVc: 'Shut down the company!!! The news got out and you just got sued for hiring discrimination. All the investors are pulling out! What on earth went wrong?',
                responses: [
                    // 'Let\'s wrap up what happened.',
                ],
                news: [
                     'Blueville Daily: Hiring algorithm scandal blows out of proportions',
                     'The Justice: Tech companies need to be held accountable',
 
                ],
            },
        ],
    },
    selfPromoMessages: [
        'Hire me!',
        'I\'m the best',
        'Help me support my family!',
        'I\'m an expert!',
        'Help me pay off my student loan!',
        'I desperately need a job!',
        'Choose me!',
        'I\'m a nice person!',
        'I am ambitious',
        'This is the startup with potential',
        'You seem like a great CEO',
        'I want to work for you',
        'I am great with people',
        'I can do better than these people',
        'I am a fast learner!',
        'Why wouldn\'t you hire me?',
        'I have two kids',
        'I was the smartest in my class'
    ]
};

const language = 'hungarian';

// exporting whatever is determined as the language.
// module.export is for pug, while the txt variable is just a global shatred variable holding all the texts and can be used in JS
// when loading in the ES6 application, there is no module provided so it is undefined
let txt;

// defining a global variable candidateClicked to access the ID globally without having to emit a value
let candidateClicked = 0;
let candidateInSpot = null;

function setLang(dictionary) {
    if (typeof module !== 'undefined') {
        module.exports = dictionary;
    } else {
        txt = dictionary;
    }
}

switch (language) {
case 'english':
    setLang(english);
    break;
case 'arabic':
    setLang(null);
    break;
default:
    setLang(english);
} 
