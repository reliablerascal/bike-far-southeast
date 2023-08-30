// let topTitleDiv = "";

// let titleDiv = "";

// let bylineDiv = "";

// let descriptionDiv = "";
// let footerDiv = "";

// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 6;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 300;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = false;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running Order total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)

//to replace with my token


var config = {
    // style: 'mapbox://styles/robcat26/cllfi4uo901m701qleb6n02ik',
    //gotta use this prepackaged style to make it work. probably something to do with references to layering
    style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xrZTBrejIwMHp0YjNmcXZiaWN1enZwNiJ9._g79-Ecyuo5ahLVN3pyZZw',
    
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    // title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    // footer: 'Source: source citations, etc.',
    // topTitle: topTitleDiv,
    // title: titleDiv,
    // subtitle: "Sergio's Morning Commute",
    // byline: bylineDiv,
    // description: descriptionDiv,
    // footer: footerDiv,
    chapters: [
        {
            id: 'drive-slide-0',
            //title:,
            // image: './charts/images/home.png',
            description: 
                '<p>fsadjklgas jkldasgjkl;sag</p>',
            location: {
                center: [-87.53909, 41.68757],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            // mapAnimation: 'flyTo',
            // callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-01',
           // title: 
            description: 
            '<p>fsadjklgas jkldasgjkl;sag</p>',
            location: {
                // center: [-97.75260, 30.28611],
                // zoom: 15.03,
                // pitch: 38.00,
                // bearing: -146.40  // location information is from the drive route
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-02',
            //title: 'Well...sometime we do encounter random roadblocks :|',
            image: './images/roadblock.png',
            // description: 
            //     '<p>Delivery pay: $2.77</p>' + 
            //     '<p>Mileage: $0.23 for biking 0.958 miles</p>' + 
            //     '<p>Tip: $2.70</p>' + '<hr>' + 
            //     '<p><b>Order total: $5.70</b></p>' + 
            //     '<h3>Total: $19.76</h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-03',
            //title:,
            image: './images/waterloo.png',
            description: 
                'gdsgsgsg sgdsfgsdfg',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-01',
            //title: ,
            image: './images/vinyl.png', 
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-02',
            //title: ,
            image: './images/bookpeople.png',
            description: 
                'fasdfsdafsafsdfsdaf fasfasdf',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        // You can add a normal slide in the middle of the drive slides to take a break
        {
            id: 'slide-03',
            image: './images/bannedbooks.png',
            description: 'sdfdasf asdf sadf',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-04',
            //title:,
            image: './images/merit.png',
            description: 
                'fasd asdfjkl; jkl;adsf',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-04',
            //title:,
            image: './images/coffee.png',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-05',
            //title:,
            image: './images/dog.png',
            // description:,
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-05',
            //title:,
            image: './images/flower.png',
            description:  
                'RECENTER fadsfdsfdsaf sfa',
            location: {center: [-74.50000, 40.00000]},
            onChapterEnter: [
            ],
            onChapterExit: []
        },  
        {
            id: 'drive-slide-06',
            //title:,
            image: './images/flower.png',
            description:  
                'fadsfdsfdsaf sfa',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
