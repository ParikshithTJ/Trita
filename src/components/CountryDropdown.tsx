import * as React from "react"

const countries = [
  { code: "+91", name: "India", flag: "🇮🇳", minLength: 10, maxLength: 10 },
  { code: "+1", name: "United States", flag: "🇺🇸", minLength: 10, maxLength: 10 },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧", minLength: 10, maxLength: 11 },
  { code: "+61", name: "Australia", flag: "🇦🇺", minLength: 9, maxLength: 10 },
  { code: "+49", name: "Germany", flag: "🇩🇪", minLength: 10, maxLength: 11 },
  { code: "+33", name: "France", flag: "🇫🇷", minLength: 9, maxLength: 9 },
  { code: "+81", name: "Japan", flag: "🇯🇵", minLength: 10, maxLength: 11 },
  { code: "+86", name: "China", flag: "🇨🇳", minLength: 10, maxLength: 11 },
  { code: "+971", name: "United Arab Emirates", flag: "🇦🇪", minLength: 9, maxLength: 9 },
  { code: "+65", name: "Singapore", flag: "🇸🇬", minLength: 8, maxLength: 8 },
  { code: "+93", name: "Afghanistan", flag: "🇦🇫", minLength: 9, maxLength: 10 },
  { code: "+355", name: "Albania", flag: "🇦🇱", minLength: 8, maxLength: 9 },
  { code: "+213", name: "Algeria", flag: "🇩🇿", minLength: 9, maxLength: 10 },
  { code: "+376", name: "Andorra", flag: "🇦🇩", minLength: 6, maxLength: 9 },
  { code: "+244", name: "Angola", flag: "🇦🇴", minLength: 9, maxLength: 9 },
  { code: "+1264", name: "Anguilla", flag: "🇦🇮", minLength: 7, maxLength: 7 },
  { code: "+1268", name: "Antigua and Barbuda", flag: "🇦🇬", minLength: 7, maxLength: 7 },
  { code: "+54", name: "Argentina", flag: "🇦🇷", minLength: 8, maxLength: 11 },
  { code: "+374", name: "Armenia", flag: "🇦🇲", minLength: 8, maxLength: 8 },
  { code: "+297", name: "Aruba", flag: "🇦🇼", minLength: 7, maxLength: 7 },
  { code: "+43", name: "Austria", flag: "🇦🇹", minLength: 8, maxLength: 13 },
  { code: "+994", name: "Azerbaijan", flag: "🇦🇿", minLength: 9, maxLength: 9 },
  { code: "+1242", name: "Bahamas", flag: "🇧🇸", minLength: 7, maxLength: 7 },
  { code: "+973", name: "Bahrain", flag: "🇧🇭", minLength: 8, maxLength: 8 },
  { code: "+880", name: "Bangladesh", flag: "🇧🇩", minLength: 10, maxLength: 11 },
  { code: "+1246", name: "Barbados", flag: "🇧🇧", minLength: 7, maxLength: 7 },
  { code: "+375", name: "Belarus", flag: "🇧🇾", minLength: 9, maxLength: 9 },
  { code: "+32", name: "Belgium", flag: "🇧🇪", minLength: 8, maxLength: 10 },
  { code: "+501", name: "Belize", flag: "🇧🇿", minLength: 7, maxLength: 7 },
  { code: "+229", name: "Benin", flag: "🇧🇯", minLength: 8, maxLength: 8 },
  { code: "+1441", name: "Bermuda", flag: "🇧🇲", minLength: 7, maxLength: 7 },
  { code: "+975", name: "Bhutan", flag: "🇧🇹", minLength: 7, maxLength: 8 },
  { code: "+591", name: "Bolivia", flag: "🇧🇴", minLength: 8, maxLength: 8 },
  { code: "+387", name: "Bosnia and Herzegovina", flag: "🇧🇦", minLength: 8, maxLength: 8 },
  { code: "+267", name: "Botswana", flag: "🇧🇼", minLength: 7, maxLength: 8 },
  { code: "+55", name: "Brazil", flag: "🇧🇷", minLength: 10, maxLength: 11 },
  { code: "+1284", name: "British Virgin Islands", flag: "🇻🇬", minLength: 7, maxLength: 7 },
  { code: "+673", name: "Brunei", flag: "🇧🇳", minLength: 7, maxLength: 7 },
  { code: "+359", name: "Bulgaria", flag: "🇧🇬", minLength: 8, maxLength: 9 },
  { code: "+226", name: "Burkina Faso", flag: "🇧🇫", minLength: 8, maxLength: 8 },
  { code: "+257", name: "Burundi", flag: "🇧🇮", minLength: 8, maxLength: 8 },
  { code: "+855", name: "Cambodia", flag: "🇰🇭", minLength: 8, maxLength: 9 },
  { code: "+237", name: "Cameroon", flag: "🇨🇲", minLength: 9, maxLength: 9 },
  { code: "+1", name: "Canada", flag: "🇨🇦", minLength: 10, maxLength: 10 },
  { code: "+238", name: "Cape Verde", flag: "🇨🇻", minLength: 7, maxLength: 7 },
  { code: "+1345", name: "Cayman Islands", flag: "🇰🇾", minLength: 7, maxLength: 7 },
  { code: "+236", name: "Central African Republic", flag: "🇨🇫", minLength: 8, maxLength: 8 },
  { code: "+235", name: "Chad", flag: "🇹🇩", minLength: 8, maxLength: 8 },
  { code: "+56", name: "Chile", flag: "🇨🇱", minLength: 8, maxLength: 9 },
  { code: "+57", name: "Colombia", flag: "🇨🇴", minLength: 10, maxLength: 10 },
  { code: "+269", name: "Comoros", flag: "🇰🇲", minLength: 7, maxLength: 7 },
  { code: "+242", name: "Congo", flag: "🇨🇬", minLength: 9, maxLength: 9 },
  { code: "+243", name: "Democratic Republic of the Congo", flag: "🇨🇩", minLength: 9, maxLength: 9 },
  { code: "+682", name: "Cook Islands", flag: "🇨🇰", minLength: 5, maxLength: 5 },
  { code: "+506", name: "Costa Rica", flag: "🇨🇷", minLength: 8, maxLength: 8 },
  { code: "+385", name: "Croatia", flag: "🇭🇷", minLength: 8, maxLength: 9 },
  { code: "+53", name: "Cuba", flag: "🇨🇺", minLength: 8, maxLength: 8 },
  { code: "+599", name: "Curaçao", flag: "🇨🇼", minLength: 7, maxLength: 7 },
  { code: "+357", name: "Cyprus", flag: "🇨🇾", minLength: 8, maxLength: 8 },
  { code: "+420", name: "Czech Republic", flag: "🇨🇿", minLength: 9, maxLength: 9 },
  { code: "+45", name: "Denmark", flag: "🇩🇰", minLength: 8, maxLength: 8 },
  { code: "+253", name: "Djibouti", flag: "🇩🇯", minLength: 8, maxLength: 8 },
  { code: "+1767", name: "Dominica", flag: "🇩🇲", minLength: 7, maxLength: 7 },
  { code: "+1809", name: "Dominican Republic", flag: "🇩🇴", minLength: 10, maxLength: 10 },
  { code: "+670", name: "East Timor", flag: "🇹🇱", minLength: 8, maxLength: 8 },
  { code: "+593", name: "Ecuador", flag: "🇪🇨", minLength: 9, maxLength: 9 },
  { code: "+20", name: "Egypt", flag: "🇪🇬", minLength: 10, maxLength: 10 },
  { code: "+503", name: "El Salvador", flag: "🇸🇻", minLength: 8, maxLength: 8 },
  { code: "+240", name: "Equatorial Guinea", flag: "🇬🇶", minLength: 9, maxLength: 9 },
  { code: "+291", name: "Eritrea", flag: "🇪🇷", minLength: 7, maxLength: 7 },
  { code: "+372", name: "Estonia", flag: "🇪🇪", minLength: 7, maxLength: 8 },
  { code: "+251", name: "Ethiopia", flag: "🇪🇹", minLength: 9, maxLength: 10 },
  { code: "+500", name: "Falkland Islands", flag: "🇫🇰", minLength: 5, maxLength: 5 },
  { code: "+298", name: "Faroe Islands", flag: "🇫🇴", minLength: 6, maxLength: 6 },
  { code: "+679", name: "Fiji", flag: "🇫🇯", minLength: 7, maxLength: 7 },
  { code: "+358", name: "Finland", flag: "🇫🇮", minLength: 9, maxLength: 10 },
  { code: "+594", name: "French Guiana", flag: "🇬🇫", minLength: 9, maxLength: 9 },
  { code: "+689", name: "French Polynesia", flag: "🇵🇫", minLength: 6, maxLength: 6 },
  { code: "+241", name: "Gabon", flag: "🇬🇦", minLength: 7, maxLength: 7 },
  { code: "+220", name: "Gambia", flag: "🇬🇲", minLength: 7, maxLength: 7 },
  { code: "+995", name: "Georgia", flag: "🇬🇪", minLength: 9, maxLength: 9 },
  { code: "+233", name: "Ghana", flag: "🇬🇭", minLength: 9, maxLength: 10 },
  { code: "+350", name: "Gibraltar", flag: "🇬🇮", minLength: 8, maxLength: 8 },
  { code: "+30", name: "Greece", flag: "🇬🇷", minLength: 10, maxLength: 10 },
  { code: "+299", name: "Greenland", flag: "🇬🇱", minLength: 6, maxLength: 6 },
  { code: "+1473", name: "Grenada", flag: "🇬🇩", minLength: 7, maxLength: 7 },
  { code: "+590", name: "Guadeloupe", flag: "🇬🇵", minLength: 9, maxLength: 9 },
  { code: "+1671", name: "Guam", flag: "🇬🇺", minLength: 7, maxLength: 7 },
  { code: "+502", name: "Guatemala", flag: "🇬🇹", minLength: 8, maxLength: 8 },
  { code: "+224", name: "Guinea", flag: "🇬🇳", minLength: 8, maxLength: 9 },
  { code: "+245", name: "Guinea-Bissau", flag: "🇬🇼", minLength: 7, maxLength: 7 },
  { code: "+592", name: "Guyana", flag: "🇬🇾", minLength: 7, maxLength: 7 },
  { code: "+509", name: "Haiti", flag: "🇭🇹", minLength: 8, maxLength: 8 },
  { code: "+504", name: "Honduras", flag: "🇭🇳", minLength: 8, maxLength: 8 },
  { code: "+852", name: "Hong Kong", flag: "🇭🇰", minLength: 8, maxLength: 8 },
  { code: "+36", name: "Hungary", flag: "🇭🇺", minLength: 9, maxLength: 9 },
  { code: "+354", name: "Iceland", flag: "🇮🇸", minLength: 7, maxLength: 7 },
  { code: "+62", name: "Indonesia", flag: "🇮🇩", minLength: 9, maxLength: 12 },
  { code: "+98", name: "Iran", flag: "🇮🇷", minLength: 10, maxLength: 10 },
  { code: "+964", name: "Iraq", flag: "🇮🇶", minLength: 10, maxLength: 10 },
  { code: "+353", name: "Ireland", flag: "🇮🇪", minLength: 9, maxLength: 9 },
  { code: "+972", name: "Israel", flag: "🇮🇱", minLength: 9, maxLength: 10 },
  { code: "+39", name: "Italy", flag: "🇮🇹", minLength: 9, maxLength: 10 },
  { code: "+225", name: "Ivory Coast", flag: "🇨🇮", minLength: 8, maxLength: 10 },
  { code: "+1876", name: "Jamaica", flag: "🇯🇲", minLength: 7, maxLength: 7 },
  { code: "+962", name: "Jordan", flag: "🇯🇴", minLength: 9, maxLength: 9 },
  { code: "+7", name: "Kazakhstan", flag: "🇰🇿", minLength: 10, maxLength: 10 },
  { code: "+254", name: "Kenya", flag: "🇰🇪", minLength: 9, maxLength: 10 },
  { code: "+686", name: "Kiribati", flag: "🇰🇮", minLength: 5, maxLength: 8 },
  { code: "+850", name: "North Korea", flag: "🇰🇵", minLength: 10, maxLength: 10 },
  { code: "+82", name: "South Korea", flag: "🇰🇷", minLength: 9, maxLength: 10 },
  { code: "+965", name: "Kuwait", flag: "🇰🇼", minLength: 8, maxLength: 8 },
  { code: "+996", name: "Kyrgyzstan", flag: "🇰🇬", minLength: 9, maxLength: 9 },
  { code: "+856", name: "Laos", flag: "🇱🇦", minLength: 9, maxLength: 10 },
  { code: "+371", name: "Latvia", flag: "🇱🇻", minLength: 8, maxLength: 8 },
  { code: "+961", name: "Lebanon", flag: "🇱🇧", minLength: 8, maxLength: 8 },
  { code: "+266", name: "Lesotho", flag: "🇱🇸", minLength: 8, maxLength: 8 },
  { code: "+231", name: "Liberia", flag: "🇱🇷", minLength: 7, maxLength: 8 },
  { code: "+218", name: "Libya", flag: "🇱🇾", minLength: 9, maxLength: 10 },
  { code: "+423", name: "Liechtenstein", flag: "🇱🇮", minLength: 7, maxLength: 7 },
  { code: "+370", name: "Lithuania", flag: "🇱🇹", minLength: 8, maxLength: 8 },
  { code: "+352", name: "Luxembourg", flag: "🇱🇺", minLength: 9, maxLength: 9 },
  { code: "+853", name: "Macau", flag: "🇲🇴", minLength: 8, maxLength: 8 },
  { code: "+389", name: "Macedonia", flag: "🇲🇰", minLength: 8, maxLength: 8 },
  { code: "+261", name: "Madagascar", flag: "🇲🇬", minLength: 9, maxLength: 10 },
  { code: "+265", name: "Malawi", flag: "🇲🇼", minLength: 9, maxLength: 9 },
  { code: "+60", name: "Malaysia", flag: "🇲🇾", minLength: 9, maxLength: 10 },
  { code: "+960", name: "Maldives", flag: "🇲🇻", minLength: 7, maxLength: 7 },
  { code: "+223", name: "Mali", flag: "🇲🇱", minLength: 8, maxLength: 8 },
  { code: "+356", name: "Malta", flag: "🇲🇹", minLength: 8, maxLength: 8 },
  { code: "+692", name: "Marshall Islands", flag: "🇲🇭", minLength: 7, maxLength: 7 },
  { code: "+596", name: "Martinique", flag: "🇲🇶", minLength: 9, maxLength: 9 },
  { code: "+222", name: "Mauritania", flag: "🇲🇷", minLength: 8, maxLength: 8 },
  { code: "+230", name: "Mauritius", flag: "🇲🇺", minLength: 8, maxLength: 8 },
  { code: "+262", name: "Mayotte", flag: "🇾🇹", minLength: 9, maxLength: 9 },
  { code: "+52", name: "Mexico", flag: "🇲🇽", minLength: 10, maxLength: 10 },
  { code: "+691", name: "Micronesia", flag: "🇫🇲", minLength: 7, maxLength: 7 },
  { code: "+373", name: "Moldova", flag: "🇲🇩", minLength: 8, maxLength: 8 },
  { code: "+377", name: "Monaco", flag: "🇲🇨", minLength: 8, maxLength: 9 },
  { code: "+976", name: "Mongolia", flag: "🇲🇳", minLength: 8, maxLength: 8 },
  { code: "+382", name: "Montenegro", flag: "🇲🇪", minLength: 8, maxLength: 8 },
  { code: "+1664", name: "Montserrat", flag: "🇲🇸", minLength: 7, maxLength: 7 },
  { code: "+212", name: "Morocco", flag: "🇲🇦", minLength: 9, maxLength: 9 },
  { code: "+258", name: "Mozambique", flag: "🇲🇿", minLength: 9, maxLength: 9 },
  { code: "+95", name: "Myanmar", flag: "🇲🇲", minLength: 8, maxLength: 9 },
  { code: "+264", name: "Namibia", flag: "🇳🇦", minLength: 9, maxLength: 10 },
  { code: "+674", name: "Nauru", flag: "🇳🇷", minLength: 7, maxLength: 7 },
  { code: "+977", name: "Nepal", flag: "🇳🇵", minLength: 10, maxLength: 10 },
  { code: "+31", name: "Netherlands", flag: "🇳🇱", minLength: 9, maxLength: 9 },
  { code: "+687", name: "New Caledonia", flag: "🇳🇨", minLength: 6, maxLength: 6 },
  { code: "+64", name: "New Zealand", flag: "🇳🇿", minLength: 8, maxLength: 10 },
  { code: "+505", name: "Nicaragua", flag: "🇳🇮", minLength: 8, maxLength: 8 },
  { code: "+227", name: "Niger", flag: "🇳🇪", minLength: 8, maxLength: 8 },
  { code: "+234", name: "Nigeria", flag: "🇳🇬", minLength: 10, maxLength: 11 },
  { code: "+683", name: "Niue", flag: "🇳🇺", minLength: 4, maxLength: 4 },
  { code: "+672", name: "Norfolk Island", flag: "🇳🇫", minLength: 6, maxLength: 6 },
  { code: "+1670", name: "Northern Mariana Islands", flag: "🇲🇵", minLength: 7, maxLength: 7 },
  { code: "+47", name: "Norway", flag: "🇳🇴", minLength: 8, maxLength: 8 },
  { code: "+968", name: "Oman", flag: "🇴🇲", minLength: 8, maxLength: 8 },
  { code: "+92", name: "Pakistan", flag: "🇵🇰", minLength: 10, maxLength: 10 },
  { code: "+680", name: "Palau", flag: "🇵🇼", minLength: 7, maxLength: 7 },
  { code: "+970", name: "Palestine", flag: "🇵🇸", minLength: 9, maxLength: 9 },
  { code: "+507", name: "Panama", flag: "🇵🇦", minLength: 8, maxLength: 8 },
  { code: "+675", name: "Papua New Guinea", flag: "🇵🇬", minLength: 7, maxLength: 8 },
  { code: "+595", name: "Paraguay", flag: "🇵🇾", minLength: 9, maxLength: 9 },
  { code: "+51", name: "Peru", flag: "🇵🇪", minLength: 9, maxLength: 9 },
  { code: "+63", name: "Philippines", flag: "🇵🇭", minLength: 10, maxLength: 10 },
  { code: "+689", name: "Pitcairn", flag: "🇵🇳", minLength: 4, maxLength: 4 },
  { code: "+48", name: "Poland", flag: "🇵🇱", minLength: 9, maxLength: 9 },
  { code: "+351", name: "Portugal", flag: "🇵🇹", minLength: 9, maxLength: 9 },
  { code: "+1787", name: "Puerto Rico", flag: "🇵🇷", minLength: 10, maxLength: 10 },
  { code: "+974", name: "Qatar", flag: "🇶🇦", minLength: 8, maxLength: 8 },
  { code: "+40", name: "Romania", flag: "🇷🇴", minLength: 10, maxLength: 10 },
  { code: "+7", name: "Russia", flag: "🇷🇺", minLength: 10, maxLength: 10 },
  { code: "+250", name: "Rwanda", flag: "🇷🇼", minLength: 9, maxLength: 9 },
  { code: "+590", name: "Saint Barthelemy", flag: "🇧🇱", minLength: 9, maxLength: 9 },
  { code: "+290", name: "Saint Helena", flag: "🇸🇭", minLength: 4, maxLength: 4 },
  { code: "+1869", name: "Saint Kitts and Nevis", flag: "🇰🇳", minLength: 7, maxLength: 7 },
  { code: "+1758", name: "Saint Lucia", flag: "🇱🇨", minLength: 7, maxLength: 7 },
  { code: "+590", name: "Saint Martin", flag: "🇲🇫", minLength: 9, maxLength: 9 },
  { code: "+508", name: "Saint Pierre and Miquelon", flag: "🇵🇲", minLength: 6, maxLength: 6 },
  { code: "+1784", name: "Saint Vincent and the Grenadines", flag: "🇻🇨", minLength: 7, maxLength: 7 },
  { code: "+685", name: "Samoa", flag: "🇼🇸", minLength: 5, maxLength: 7 },
  { code: "+378", name: "San Marino", flag: "🇸🇲", minLength: 10, maxLength: 10 },
  { code: "+239", name: "Sao Tome and Principe", flag: "🇸🇹", minLength: 7, maxLength: 7 },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦", minLength: 9, maxLength: 9 },
  { code: "+221", name: "Senegal", flag: "🇸🇳", minLength: 9, maxLength: 9 },
  { code: "+381", name: "Serbia", flag: "🇷🇸", minLength: 8, maxLength: 10 },
  { code: "+248", name: "Seychelles", flag: "🇸🇨", minLength: 7, maxLength: 7 },
  { code: "+232", name: "Sierra Leone", flag: "🇸🇱", minLength: 8, maxLength: 8 },
  { code: "+1721", name: "Sint Maarten", flag: "🇸🇽", minLength: 7, maxLength: 7 },
  { code: "+421", name: "Slovakia", flag: "🇸🇰", minLength: 9, maxLength: 9 },
  { code: "+386", name: "Slovenia", flag: "🇸🇮", minLength: 8, maxLength: 8 },
  { code: "+677", name: "Solomon Islands", flag: "🇸🇧", minLength: 7, maxLength: 7 },
  { code: "+252", name: "Somalia", flag: "🇸🇴", minLength: 8, maxLength: 9 },
  { code: "+27", name: "South Africa", flag: "🇿🇦", minLength: 9, maxLength: 10 },
  { code: "+211", name: "South Sudan", flag: "🇸🇸", minLength: 9, maxLength: 9 },
  { code: "+34", name: "Spain", flag: "🇪🇸", minLength: 9, maxLength: 9 },
  { code: "+94", name: "Sri Lanka", flag: "🇱🇰", minLength: 9, maxLength: 10 },
  { code: "+249", name: "Sudan", flag: "🇸🇩", minLength: 9, maxLength: 9 },
  { code: "+597", name: "Suriname", flag: "🇸🇷", minLength: 7, maxLength: 7 },
  { code: "+268", name: "Swaziland", flag: "🇸🇿", minLength: 8, maxLength: 8 },
  { code: "+46", name: "Sweden", flag: "🇸🇪", minLength: 7, maxLength: 10 },
  { code: "+41", name: "Switzerland", flag: "🇨🇭", minLength: 9, maxLength: 9 },
  { code: "+963", name: "Syria", flag: "🇸🇾", minLength: 9, maxLength: 10 },
  { code: "+886", name: "Taiwan", flag: "🇹🇼", minLength: 9, maxLength: 9 },
  { code: "+992", name: "Tajikistan", flag: "🇹🇯", minLength: 9, maxLength: 9 },
  { code: "+255", name: "Tanzania", flag: "🇹🇿", minLength: 9, maxLength: 10 },
  { code: "+66", name: "Thailand", flag: "🇹🇭", minLength: 9, maxLength: 10 },
  { code: "+228", name: "Togo", flag: "🇹🇬", minLength: 8, maxLength: 8 },
  { code: "+690", name: "Tokelau", flag: "🇹🇰", minLength: 4, maxLength: 4 },
  { code: "+676", name: "Tonga", flag: "🇹🇴", minLength: 5, maxLength: 5 },
  { code: "+1868", name: "Trinidad and Tobago", flag: "🇹🇹", minLength: 7, maxLength: 7 },
  { code: "+216", name: "Tunisia", flag: "🇹🇳", minLength: 8, maxLength: 8 },
  { code: "+90", name: "Turkey", flag: "🇹🇷", minLength: 10, maxLength: 10 },
  { code: "+993", name: "Turkmenistan", flag: "🇹🇲", minLength: 8, maxLength: 8 },
  { code: "+1649", name: "Turks and Caicos Islands", flag: "🇹🇨", minLength: 7, maxLength: 7 },
  { code: "+688", name: "Tuvalu", flag: "🇹🇻", minLength: 5, maxLength: 6 },
  { code: "+256", name: "Uganda", flag: "🇺🇬", minLength: 9, maxLength: 10 },
  { code: "+380", name: "Ukraine", flag: "🇺🇦", minLength: 9, maxLength: 10 },
  { code: "+598", name: "Uruguay", flag: "🇺🇾", minLength: 8, maxLength: 9 },
  { code: "+998", name: "Uzbekistan", flag: "🇺🇿", minLength: 9, maxLength: 9 },
  { code: "+678", name: "Vanuatu", flag: "🇻🇺", minLength: 5, maxLength: 7 },
  { code: "+379", name: "Vatican", flag: "🇻🇦", minLength: 10, maxLength: 10 },
  { code: "+58", name: "Venezuela", flag: "🇻🇪", minLength: 10, maxLength: 10 },
  { code: "+84", name: "Vietnam", flag: "🇻🇳", minLength: 9, maxLength: 11 },
  { code: "+681", name: "Wallis and Futuna", flag: "🇼🇫", minLength: 6, maxLength: 6 },
  { code: "+967", name: "Yemen", flag: "🇾🇪", minLength: 9, maxLength: 9 },
  { code: "+260", name: "Zambia", flag: "🇿🇲", minLength: 9, maxLength: 10 },
  { code: "+263", name: "Zimbabwe", flag: "🇿🇼", minLength: 9, maxLength: 10 },
]

type Country = typeof countries[0]

type CountryDropdownProps = {
  value: Country
  onChange: (country: Country) => void
}

export default function CountryDropdown({ value, onChange }: CountryDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  const filteredCountries = React.useMemo(() => {
    if (!search.trim()) return countries
    const searchLower = search.toLowerCase().trim()
    return countries.filter(
      (c) =>
        c.code.toLowerCase().includes(searchLower) ||
        c.code.replace("+", "").includes(searchLower) ||
        c.name.toLowerCase().includes(searchLower) ||
        c.name.toLowerCase().startsWith(searchLower)
    )
  }, [search])

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  React.useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  const handleSelect = (country: Country) => {
    onChange(country)
    setIsOpen(false)
    setSearch("")
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-11 w-full rounded-2xl border border-border bg-surface-warm px-4 font-body text-base text-foreground outline-none transition-all duration-200 hover:border-primary/40 focus:border-primary/60 focus:bg-background focus:ring-2 focus:ring-primary/20 flex items-center justify-between"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl">{value.flag}</span>
          <span>{value.code}</span>
        </span>
        <span className="text-foreground/50">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full max-h-80 overflow-auto rounded-2xl border border-border bg-card shadow-lift">
          <div className="sticky top-0 bg-card border-b border-border px-4 py-3">
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country or code..."
              className="w-full rounded-xl border border-border bg-surface-warm px-3 py-2 font-body text-sm text-foreground outline-none transition-all duration-200 focus:border-primary/60 focus:bg-background focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/30"
            />
          </div>

          <div className="py-2">
            {filteredCountries.length === 0 ? (
              <div className="px-4 py-8 text-center font-body text-sm text-muted-foreground">
                No countries found
              </div>
            ) : (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleSelect(country)}
                  className={`w-full px-4 py-3 text-left font-body text-sm transition-colors flex items-center gap-3 hover:bg-muted/30 ${
                    country.code === value.code ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                >
                  <span className="text-xl">{country.flag}</span>
                  <span className="flex-1">{country.name}</span>
                  <span className="text-muted-foreground font-bold">{country.code}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export { countries }
