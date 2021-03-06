var offPlaces = {
  '-12': ['Baker Island', 'Howland Island'],
  '-11': ['American Samoa', 'Hawaii', 'Jarvis Island', 'Kingman Reef', 'Midway Atoll', 'Palmyra Atoll', 'Niue'],
  '-10': ['French Polynesia', 'Cook Islands', 'Aleutian Islands', 'Necker Island', 'Johnston Atoll'],
  '-9.5': ['Marquesas Islands'],
  '-9': ['Gambier Islands', 'Alaska'],
  '-8': ['British Columbia', 'Yukon', 'Clipperton Island', 'Baja California', 'Pitcairn Islands', 'California', 'Idaho', 'Nevada', 'Oregon', 'Washington'],
  '-7': ['Alberta', 'Nunavut', 'Lloydminster', 'Baja California Sur', 'Chihuahua', 'Nayarit', 'Sinaloa', 'Sonora', 'Arizona', 'Colorado', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'South Dakota', 'Texas', 'Utah', 'Wyoming'],
  '-6': ['Belize', 'Manitoba', 'Ontario', 'Saskatchewan', 'Costa Rica', 'Galapagos Islands', 'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua', 'Alabama', 'Arkansas', 'Florida', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Oklahoma', 'Tennessee', 'Wisconsin'],
  '-5': ['Bahamas', 'Acre', 'Amazonas', 'Quebec', 'Colombia', 'Easter Island', 'Cuba', 'Ecuador', 'Haiti', 'Jamaica', 'Quintana Roo', 'Panama', 'Peru', 'Cayman Islands', 'Delaware', 'Washington DC', 'Georgia', 'Maryland', 'Connecticut', 'Massachusetts', 'Maine', 'New Hampshire', 'Rhode Island', 'Vermont', 'New Jersey', 'New York', 'North Carolina', 'Ohio', 'Pennsylvania', 'South Carolina', 'Virginia', 'West Virginia', 'Navassa Island'],
  '-4.5': ['Venezuela'],
  '-4': ['Antigua and Barbuda', 'Barbados', 'Bolivia', 'Brazil', 'New Brunswick', 'Newfoundland', 'Labrador', 'Nova Scotia', 'Prince Edward Island', 'Pituffik', 'Dominica', 'Dominican Republic', 'Guadeloupe', 'Martinique', 'Saint Barthelemy', 'Saint-Martin', 'Grenada', 'Guyana', 'Aruba', 'Bonaire', 'Saba', 'Sint Eustatius', 'Curacao', 'Sint Maarten', 'Paraguay', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'Anguilla', 'Bermuda', 'British Virgin Islands', 'Montserrat', 'Turks and Caicos Islands', 'Puerto Rico', 'US Virgin Islands'],
  '-3': ['Argentina', 'Brazil', 'Chile', 'Greenland', 'French Guiana', 'Saint-Pierre and Miquelon', 'Suriname', 'Falkland Islands', 'Uruguay'],
  '-2': ['Fernando de Noronha', 'South Georgia and the South Sandwich Islands'],
  '-1': ['Cape Verde', 'Ittoqqortoormiit', 'Azores Islands'],
  '0': ['Burkina Faso', 'Cote d\'lvoire', 'Faroe Islands', 'Danmarkshavn', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Iceland', 'Ireland', 'Liberia', 'Mali', 'Mauritania', 'Morocco', 'Portugal', 'Sahrawi Republic', 'Sao Tome and Principe', 'Canary Islands', 'Senegal', 'Sierra Leone', 'Togo', 'United Kingdom'],
  '+1': ['Albania', 'Algeria', 'Andorra', 'Angola', 'Austria', 'Belgium', 'Benin', 'Bosnia and Herzegovina', 'Cameroon', 'Central African Republic', 'Chad', 'Congo-Brazzaville', 'Democratic Republic of the Congo', 'Croatia', 'Czech Republic', 'Denmark', 'Equatorial Guinea', 'France', 'Gabon', 'Germany', 'Hungary', 'Italy', 'Kosovo', 'Liechtenstein', 'Luxembourg', 'Macedonia', 'Malta', 'Monaco', 'Montenegro', 'Namibia', 'Netherlands', 'Niger', 'Nigeria', 'Norway', 'Poland', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Tunisia', 'Gibraltar', 'Vatican City'],
  '+2': ['Botswana', 'Bulgaria', 'Burundi', 'Cyprus', 'Democratic Republic of the Congo', 'Egypt', 'Estonia', 'Finland', 'Greece', 'Israel', 'Jordan', 'Latvia', 'Lebanon', 'Lesotho', 'Lithuania', 'Libya', 'Malawi', 'Moldova', 'Mozambique', 'Palestine', 'Romania', 'Kaliningrad Oblast', 'Rwanda', 'South Africa', 'Swaziland', 'Syria', 'Turkey', 'Ukraine', 'Akrotiri and Dhekelia', 'Zambia', 'Zimbabwe'],
  '+3': ['Bahrain', 'Belarus', 'Comoros', 'Djibouti', 'Eritrea', 'Ethiopia', 'Bassas da India', 'Europa Island', 'Juan de Nova Island', 'Mayotte', 'Abkhazia and South Ossetia', 'Iraq', 'Kenya', 'Kuwait', 'Madagascar', 'Qatar', 'Northern Russia', 'Saudi Arabia', 'Somalia', 'Southern Sudan', 'Sudan', 'Tanzania', 'Uganda', 'Ukraine', 'Yemen'],
  '+3.5': ['Iran'],
  '+4': ['Armenia', 'Azerbaijan', 'Crozet Islands', 'Glorioso Islands', 'Tromelin Island', 'Reunion', 'Georgia', 'Mauritius', 'Oman', 'Seychelles', 'United Arab Emirates'],
  '+4.5': ['Afghanistan'],
  '+5': ['Heard Island', 'McDonald Islands', 'Ile Amsterdam', 'Ile Saint-Paul', 'Kerguelen Islands', 'Kazakhstan', 'Maldives', 'Pakistan', 'Tajikistan', 'Turkmenistan', 'Uzbekistan'],
  '+5.5': ['India', 'Sri Lanka'],
  '+5.75': ['Nepal'],
  '+6': ['Bangladesh', 'Bhutan', 'Kazakhstan', 'Kyrgyzstan', 'British Indian Ocean Territory'],
  '+6.5': ['Cocos Islands', 'Myanmar'],
  '+7': ['Christmas Island', 'Cambodia', 'Indonesia', 'Laos', 'Mongolia', 'Thailand', 'Vietnam'],
  '+8': ['Western Australia', 'Brunei', 'China', 'Indonesia', 'Malaysia', 'Mongolia', 'Philippines', 'Singapore', 'Taiwan'],
  '+8.5': ['Democratic People\'s Republic of Korea'],
  '+8.75': ['Eucla'],
  '+9': ['Indonesia', 'Japan', 'South Korea', 'Palau', 'Timor-Leste'],
  '+9.5': ['Northern Territory of Australia', 'South Australia'],
  '+10': ['New South Wales', 'Queensland', 'Tasmania', 'Victoria', 'Federated States of Micronesia', 'Papua New Guinea', 'Guam', 'Northen Mariana Islands'],
  '+10.5': ['Lord Howe Island'],
  '+11': ['Norfold Island', 'Federated States of Micronesia', 'New Caledonia', 'Autonomous Region of Bougainville', 'Solomon Islands', 'Vanuatu'],
  '+12': ['Wallis and Futuna', 'Fiji', 'Gilbert Islands', 'Marshall Islands', 'Nauru', 'New Zealand', 'Tuvalu', 'Wake Island'],
  '+12.75': ['Chatham Islands'],
  '+13': ['Phoenix Islands', 'Tokelau', 'Samoa', 'Tonga'],
  '+14': ['Line Islands']
};

var loaders = [
'./images/wait-1.webm',
'./images/wait-2.webm',
'./images/wait-3.webm',
'./images/wait-4.webm',
'./images/wait-5.webm',
'./images/wait-6.webm',
];

var weirdos = [
'./images/weird-1.webm',
'./images/weird-2.webm',
'./images/weird-3.webm',
'./images/weird-4.webm',
'./images/weird-5.webm',
'./images/weird-6.webm',
'./images/weird-7.webm',
'./images/weird-8.webm',
'./images/weird-9.webm',
];

var randomIndex = function (array) {
  return array[Math.floor((Math.random()*array.length))];
};

$(window).ready(function() {
  $('.forn-location').on('click', function() {
    window.location.assign('https://www.google.com/maps/place/' + $(this).text() + '/');
  });
});

