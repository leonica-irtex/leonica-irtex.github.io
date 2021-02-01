/**
 * Welcome to Leonica!
 * If you have questions about the code,
 * you can contact technical support by emailing:
 *
 * envato@irtex.zohodesk.com
 */


// Debug settings
DEBUG.indicators(false);
DEBUG.scenes(false);


// Setting up the "Offer" section
/**
 * Reference object:
 * [
 *  ["word", "word", "word", "word", "word"],
 *  ["word", "word", "word", "word", "word"],
 *  ["word", "word", "word", "word", "word"]
 * ]
 */

let ObjectData = [
    "Hello! Nice to meet you!".split(' '),
    "I am a John 21 y.o.".split(' '),
    "designer from California.".split(' ')
];


Application.Offer.add(ObjectData)



// Setting up the "Portfolio" section
/**
 * Reference object:
 * {
 *   image: 'http://example.com/example.jpg',
 *   title: "Example of title",
 *   desc: "Example of description",
 *   link: {
 *       text: 'Learn more',
 *       href: '#'
 *   },
 *   props: [
 *       {
 *           name: 'Example name of prop',
 *           value: 'Example value of prop'
 *       }
 *   ]
 * }
 */

// TIP: If you don't need any of these parameters, just delete them from the object
// TIP 2: For the template index-2, we advise to put no more than 22 pictures - that's a full 4 rows
for (let i = 0; i < 24; i++) {
    Application.Portfolio.add({
        image: {
            src: `https://picsum.photos/1080/720?rand=${i}`,
            alt: ''
        }
    });
}





// Setting up the "Price list" section
/**
 * Reference object:
 * {
 *   price: '$99',
 *   title: 'Example of title'
 * }
 */

ObjectData = {
    price: '$99',
    title: 'Basic design'
};

Application.PriceList.add(ObjectData);


ObjectData = {
    price: '$199',
    title: 'Shop design'
};

Application.PriceList.add(ObjectData);


ObjectData = {
    price: '$299',
    title: 'Portal design'
};

Application.PriceList.add(ObjectData);




// Setting up the "Experience" section
/**
 * Reference object:
 * {
 *   text: 'Graphic Design',
 *   progress: 70,
 * }
 */
ObjectData = {
    text: 'Graphic Design',
    progress: 70,
}

Application.Experience.add(ObjectData)


ObjectData = {
    text: 'Web Designer',
    progress: 66,
}

Application.Experience.add(ObjectData)


ObjectData = {
    text: 'Accountant',
    progress: 82,
}

Application.Experience.add(ObjectData)


ObjectData = {
    text: 'Marketing',
    progress: 55,
}

Application.Experience.add(ObjectData)



// Setting up the "Experience" section
/**
 * Reference object:
 * {
 *   textUp: 'Up to',
 *   textDown: 'completed projects',
 *   number: 73,
 * }
 */
ObjectData = {
    textUp: 'Up to',
    textDown: 'completed projects',
    number: 73,
}

Application.Counts.add(ObjectData)


ObjectData = {
    textUp: 'Up to',
    textDown: 'positive feedback',
    number: 43,
}

Application.Counts.add(ObjectData)


ObjectData = {
    textUp: 'Up to',
    textDown: 'customers of all time',
    number: 96,
}

Application.Counts.add(ObjectData)


ObjectData = {
    textUp: 'Up to',
    textDown: 'major projects',
    number: 6,
}

Application.Counts.add(ObjectData)




// Setting up the "Education" section
// TIP: It is advisable to indicate a multiple of 2 times the number of educational institutions and places of your work
// Possible types:
//  education - Education
//  job - Work
//  jobUp - Promotion at work
//  civilServiceJob - Working for the state
/**
 * Reference object:
 * {
 *   period: '',
 *   title: '',
 *   desc: '',
 *   type: 'education'
 * }
 */
ObjectData = {
    period: '2001',
    title: 'Lorem ipsum dolor',
    desc: LOREM.slice(0, 126),
    type: 'education'
}

Application.Education.add(ObjectData)


ObjectData = {
    period: '2012',
    title: 'Lorem ipsum dolor',
    desc: LOREM.slice(0, 126),
    type: 'education'
}

Application.Education.add(ObjectData)


ObjectData = {
    period: '2014',
    title: 'Lorem ipsum dolor',
    desc: LOREM.slice(0, 126),
    type: 'job'
}

Application.Education.add(ObjectData)


ObjectData = {
    period: '2015 - 2016',
    title: 'Lorem ipsum dolor',
    desc: LOREM.slice(0, 126),
    type: 'education'
}

Application.Education.add(ObjectData)


ObjectData = {
    period: '2017',
    title: 'Lorem ipsum dolor',
    desc: LOREM.slice(0, 126),
    type: 'job'
}

Application.Education.add(ObjectData)


ObjectData = {
    period: '2018',
    title: 'Lorem ipsum dolor',
    desc: LOREM.slice(0, 126),
    type: 'education'
}

Application.Education.add(ObjectData)


ObjectData = {
    period: '2019',
    title: 'Lorem ipsum dolor',
    desc: LOREM.slice(0, 126),
    type: 'jobUp'
}

Application.Education.add(ObjectData)


ObjectData = {
    period: '2020',
    title: 'Lorem ipsum dolor',
    desc: LOREM.slice(0, 126),
    type: 'job'
}

Application.Education.add(ObjectData)



// Setting up the "Partners" section
ObjectData = {
    img: 'src/partners/partner-1.png',
    alt: ''
}

Application.Partners.add(ObjectData)


ObjectData = {
    img: 'src/partners/partner-2.png',
    alt: ''
}

Application.Partners.add(ObjectData)


ObjectData = {
    img: 'src/partners/partner-3.png',
    alt: ''
}

Application.Partners.add(ObjectData)


ObjectData = {
    img: 'src/partners/partner-4.png',
    alt: ''
}

Application.Partners.add(ObjectData)


ObjectData = {
    img: 'src/partners/partner-5.png',
    alt: ''
}

Application.Partners.add(ObjectData)


ObjectData = {
    img: 'src/partners/partner-6.png',
    alt: ''
}

Application.Partners.add(ObjectData)


ObjectData = {
    img: 'src/partners/partner-7.png',
    alt: ''
}

Application.Partners.add(ObjectData)


ObjectData = {
    img: 'src/partners/partner-8.png',
    alt: ''
}

Application.Partners.add(ObjectData)