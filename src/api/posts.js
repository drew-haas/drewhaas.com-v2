const _posts = [
    {
        id: 'tahoe',
        title: 'Lake Tahoe',
        description: 'Living the good life on the state lines of California and Nevada. Nestled in the northern part of the Sierra Nevada mountain range, the 31st largest lake in the country is surrounded by mountains. Dude, you gotta go there.',
        featureImage: 'tahoe/featured.jpg',
        filter: 'life',
        tags: [ 'life', 'adventure', 'snow', 'hike', 'photos' ],
        sections: [
            { section: 'image', images: ['tahoe-paddleboarder.jpg']},
            { section: 'image', images: ['idi-1.jpg'], caption: 'Mt. Tallack Hike'},
            { section: 'image', images: [ 'tahoe-snow-trees.jpg' ]},
            { section: 'image', images: [ 'lake-1.jpg' ]}
        ]
    },
    {
        id: "github",
        title: "GitHub Universe",
        description: 'In November 2019 I attended the GitHub Universe Conference. I learned a lot about the new features in GitHub and how to apply those to production level projects. I also learned about some cool new tooling systems such as Zeit (now <a href="https://vercel.com/" target="_blank">Vercel</a>), <a href="https://percy.io/" target="_blank">Percy.io</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind&nbsp;CSS</a> and many more.',
        featureImage: "github/featured.jpg",
        filter: 'work',
        tags: [ 'work', 'conference', 'social' ],
        sections: [
            { section: 'image', images: [ 'github-1.jpg' ] },
            { section: 'image', images: [ 'github-2.jpg' ] },
            { section: 'image', images: [ 'github-3.jpg' ] }
        ]
    },
    {
        id: "apple-product-2019",
        title: "Apple Product Launch 2019",
        description: "Custom animations and layout creations for one of the most visited websites in the&nbsp;world.",
        featureImage: "apple-product-2019/featured.png",
        link: "https://apple.com/watch",
        reachout: true,
        filter: 'work',
        tags: [ 'website', 'animation', 'front end', 'javascript' ],
        sections: [
            { section: 'image', images: [ 'apple-1.png' ], caption: 'A hero animation for the Apple Watch Edition page had specific requirements about the animation along with how it would behave responsively. To meet the requirements I used a flex display with percentages and multiple height and width media queries. For the animation I created a dynamic fading component in javascript that matched the fading of the watch image, the background, and the logo. This was all tied together so that if the team decided to add or remove a watch or color it would be as simple as copying and pasting one line and the animations would remain in place.' },
            { section: 'image', images: [ 'apple-2.png' ], caption: 'This was a parallaxing image where I measured the height of the image using javascript and made sure the image would only parallax the amount needed. This created a performant and stylish animation that met exact needs from the design team.', },
        ]
    },
    {
        id: "road-trip-2019",
        title: "Road Trip 2019",
        description: "An Epic road trip hitting some national parks in the wild wild wild wild west. That's right, 4 wilds.",
        featureImage: "road-trip-2019/featured.jpg",
        filter: 'life',
        tags: [ 'road trip', 'life', 'mountains' ],
        sections: [
            { section: 'image', images: [ 'road-trip-1.jpg' ], caption: 'Lower Antelope Canyon. Page, AZ' },
            { section: 'image', images: [ 'road-trip-2.jpg' ], caption: 'Zion National Park, UT' },
            { section: 'image', images: [ 'road-trip-3.jpg' ], caption: 'Angels Landing - Zion National Park, UT' },
        ],
    },
    {
        id: "laughingcow",
        title: "The Laughing Cow",
        description: "New and old techniques used on this playful website for this well known dairy company. 3D animations using sprites for the product pages. Gooey SVG animation for the navigation.",
        featureImage: "laughingcow/featured.jpg",
        link: "https://www.thelaughingcow.com/",
        reachout: true,
        filter: 'work',
        tags: [ 'website', 'animation', 'front end', 'drupal', '3D', 'svg', 'sprites', 'javascript animations' ],
        sections: [
            { section: 'image', images: [ 'image-home.jpg' ], caption: '<a href="https://www.thelaughingcow.com/" target="_blank">Home Page</a> - sprite animations that would fire on hover of each individual product which would "unwrap" that product' },
            { section: 'image', images: [ 'image-project-detail.jpg' ], caption: '<a href="https://www.thelaughingcow.com/product/creamy-original-wedges/">Product Detail Page</a> - large 3D sprite animations, with scroll highjacking using a fullpage scrolling library <a href="https://alvarotrigo.com/fullPage/" target="_blank">fullpage.js</a>, along with a custom product navigation using svg, transforms, and gooey svg filters. If I were to be tasked with these pages today I think I would attempt to do them all inside of WebGl using THREE.js' },
        ],
    },
    {
        id: "designcentral",
        title: "Design Central",
        description: "An Interactive website for a product design and engineering company. Created with Drupal and custom Javascript animations and solutions.",
        link: "https://www.designcentral.com/",
        featureImage: "designcentral/featured.jpg",
        filter: 'work',
        reachout: true,
        tags: [ 'website', 'animation', 'front end', 'drupal', 'javascript animations', 'pattern animation' ],
        sections: [
            { section: 'image', images: [ 'image-home.jpg' ], caption: '<a href="https://www.designcentral.com/" target="_blank">Home Page</a> - custom javascript pattern animation, along with parallaxing elements and scroll based animations'},
            { section: 'image', images: [ 'image-2.jpg' ] },
            { section: 'image', images: [ 'image-capabilities.jpg' ], caption: '<a href="https://www.designcentral.com/capabilities" target="_blank">Capabilities Page</a> - custom javascript animated infographic' },
        ],
    },
    {
        id: 'yosemite',
        title: 'Yosemite',
        description: "One of the most magical places I've been to. Something is in the air or in the water that makes this place very special. If you've been you know what I'm talking about.",
        featureImage: 'yosemite/featured.jpg',
        filter: 'life',
        tags: [ 'life', 'adventure', 'mountains', 'hikes' ],
        sections: [
            { section: 'image', images: [ 'glacier-point-3.jpg' ], caption: 'Glacier Point' },
            { section: 'image', images: [ 'tenaya-lake-1.jpg' ], caption: 'view of Tenaya Lake' },
            { section: 'image', images: [ 'glacier-point-2.jpg' ], caption: 'Glacier Point' },
            { section: 'image', images: [ 'clouds-rest-1.jpg' ], caption: "Cloud's Rest hike" },
            { section: 'image', images: [ 'tenaya-lake-2.jpg' ] },
            { section: 'image', images: [ 'clouds-rest-2.jpg' ], caption: "Cloud's Rest hike" },
        ],
    },
    {
        id: "tribute",
        title: "Tribue Equine Nutrition",
        description: "The coolest horse feed website you'll find. A lot of custom solutions went into this such as a product locator using Google Maps API and a large set of data, a nutrition selector to determine which feed is right for your horse, and various custom javascript and css animations. Created by/under Bonfire Red.",
        link: "https://tributeequinenutrition.com/",
        featureImage: "tribute/featured.jpg",
        reachout: true,
        filter: 'work',
        tags: [ 'website', 'animation', 'front end', 'nutrition selector', 'product locator', 'drupal', 'google maps api' ],
        sections: [
            { section: 'image', images: [ 'image-home.jpg' ], caption: '<a href="https://tributeequinenutrition.com/">Home Page</a> - custom layouts and animations' },
            { section: 'image', images: [ 'image-nutrition.jpg' ], caption: '<a href="https://tributeequinenutrition.com/content/nutrition-selector" target="_blank">Nutrition Selector</a> - a complex web of quiz question data to determine which horse feed was right based on the given question answers.' },
        ],
    }
];

export default _posts