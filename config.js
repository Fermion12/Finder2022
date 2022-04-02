'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoiZmVybWlvbiIsImEiOiJjbDFoam1uYXAwNThlM3JsZDc5d3BlbjdtIn0.VfsiH5WkSyECq--9hR4LVw',
  CSV: './Sample_Data.csv',
  center: [21.28718367062586, -32.766440696658535],
  zoom: 6,
  title: 'Find Your Next Hike',
  description:
    'Add somewhere in the search box to see what hikes are nearby or filter by the required. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.',
  sideBarInfo: ['Location_Name', 'Distance', 'Difficulty', 'Cost'],
  popupInfo: ['Location_Name'],
  filters: [
    {
      type: 'dropdown',
      title: 'Distance: ',
      columnHeader: 'Distance',
      listItems: [
        '5km & less',
        '6km-15km',
        '16km+',
      ],
    },
    {
      type: 'dropdown',
      title: 'Difficulty: ',
      columnHeader: 'Difficulty',
      listItems: [
        'Easy',
        'Moderate',
        'Difficult',
        'Strenuous',
      ],
    },
    {
      type: 'dropdown',
      title: 'Cost: ',
      columnHeader: 'Cost',
      listItems: [
        '5km & less',
        '6km-15km',
        '16km+',
      ],
    },
  ],
};
