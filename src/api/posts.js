const _posts = [
    {
        id: 'tahoe',
        title: 'Lake Tahoe',
        description: 'Hike up the mountains in the summer and ski down them in the winter.',
        featureImage: 'tahoe/featured.jpg',
        life: true,
        tags: [ 'life', 'adventure', 'snow', 'hike' ],
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
        description: "I attended the GitHub Universe conference in November of 2019. I learned a lot about the new features in GitHub and how to apply those to production level projects. I also learned about some cool new tooling systems such as Zeit, Percy.io, Tailwind CSS and many more.",
        featureImage: "github/featured.jpg",
        work: true,
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
        description: "Very fortunate to work on custom animations and layouts for one of the most visited websites in the world.",
        featureImage: "apple-product-2019/featured.png",
        link: "https://apple.com/watch",
        reachout: true,
        work: true,
        tags: [ 'website', 'animation', 'front end', 'javascript' ],
        sections: [
            { section: 'image', images: [ 'apple-1.png' ], caption: 'A hero animation for the Apple Watch Edition page had specific requirements about the animation along with how it would behave responsively. To meet the requirements I used a flex display with percentages and multiple height and width media queries. For the animation I created a dynamic fading component in javascript that matched the fading of the watch image, the background, and the logo. This was all tied together so that if the team decided to add or remove a watch or color it would be as simple as copying and pasting one line and the animations would remain in place.' },
            { section: 'image', images: [ 'apple-2.png' ], caption: 'This was a parallaxing image where I measured the height of the image using javascript and made sure the image would only parallax the amount needed. This created a performant and stylish animation that met exact needs from the design team.', },
        ]
    },
    {
        id: "road-trip-2019",
        title: "Road Trip 2019",
        description: "An Epic road trip hitting some national parks in the wild west.",
        featureImage: "road-trip-2019/featured.jpg",
        life: true,
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
        work: true,
        tags: [ 'website', 'animation', 'front end', 'drupal', '3D', 'svg', 'sprites', 'javascript animations' ],
        sections: [
            { section: 'image', images: [ 'image-home.jpg' ] },
            { section: 'image', images: [ 'image-project-detail.jpg' ] },
        ],
    },
    {
        id: "designcentral",
        title: "Design Central",
        description: "An Interactive website for a product design and engineering company. Created with Drupal and custom Javascript animations and solutions.",
        link: "https://www.designcentral.com/",
        featureImage: "designcentral/featured.jpg",
        work: true,
        reachout: true,
        tags: [ 'website', 'animation', 'front end', 'drupal', 'javascript animations', 'pattern animation' ],
        sections: [
            { section: 'image', images: [ 'image-home.jpg' ], },
            { section: 'image', images: [ 'image-2.jpg' ] },
            { section: 'image', images: [ 'image-capabilities.jpg' ] },
        ],
    },
    {
        id: 'yosemite',
        title: 'Yosemite',
        description: 'There\'s not much to say other than this place is magical. It\'s hard to take a bad photo in this National Park.',
        featureImage: 'yosemite/featured.jpg',
        life: true,
        tags: [ 'life', 'adventure', 'mountains', 'hikes' ],
        sections: [
            { section: 'image', images: [ 'glacier-point-3.jpg' ] },
            { section: 'image', images: [ 'tenaya-lake-1.jpg' ] },
            { section: 'image', images: [ 'glacier-point-2.jpg' ] },
            { section: 'image', images: [ 'clouds-rest-1.jpg' ] },
            { section: 'image', images: [ 'tenaya-lake-2.jpg' ] },
            { section: 'image', images: [ 'clouds-rest-2.jpg' ] },
        ],
    },
    {
        id: "tribute",
        title: "Tribue Equine Nutrition",
        description: "The coolest horse feed website you'll find. A lot of custom solutions went into this such as a product locator, a nutrition selector to determine which feed is right for your horse, and some custom animations.",
        link: "https://tributeequinenutrition.com/",
        featureImage: "tribute/featured.jpg",
        reachout: true,
        work: true,
        tags: [ 'website', 'animation', 'front end', 'nutrition selector', 'product locator', 'drupal', 'google maps api' ],
        sections: [
            { section: 'image', images: [ 'image-home.jpg' ] },
            { section: 'image', images: [ 'image-nutrition.jpg' ] },
        ],
    }
];

export default _posts