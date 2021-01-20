/*       American Standard Code for Information Interchange  ASCII    
 
        ***    Author: Agbeze Obinna Aligbo Ephraim David     ***
    we need to save our future by destroying our urgly present in the past! TENET
*/

//  importation process
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const forecastFunc = require('./utils/forecast')
const geoCodeFunc = require('./utils/geocode')

// set up a server && port
const app = express()
const port = process.env.PORT || 3000

//define paths for express configuration
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPaths = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPaths)

//setup static directory to serve
app.use(express.static(publicDir))


/*you don't have to believe in the govt to be a good citizen, you just have to beleive
in your country. All we need in the government are Nationalist, nothing more, nothing less.
Any Youth who isn't a Nationalist will still go there and mess things up
*/

/*
 Nigerian States End Point!  
*    The Nigerian Govt fed the World with Wrong info about the on going
*    Protest; as at second week of October 2020. Hence, This end point takes into account the 
*    total number of Citizens killed by Security Agencies at the time of #EndSARS protest in each state, mostly
*    southern part of the country. here is the HTTP JSON based API. updated mutiple times in a day.

*/


//serving Nigeria State API
app.get('/states', (req, res) => {
    res.send({
            author: 'Agbeze Aligbo Obinna',
            APIdetails: ' - Nigeria State http JSON based API - © July 2020 -',
            date: `${new Date().toLocaleDateString()} - Time: ${new Date().toLocaleTimeString()}`,
            profile: {
                officalName: 'Federal Republic of Nigeria',
                Independence: 1960,
                population: '+ 180, 000, 000',
                majorTribes: ['Hausa', 'Yoruba', 'Igbo'],
                currencies: ['naria', 'kobo (currently not in use)'],
                noOfStates: 36,
                region: 'West Africa',
                capital: 'Abuja',
                area: '923, 768.64 Square Kilometers',
                landArea: '910, 077.00 square kilometers',
                location: 'Western Africa, bordered by North Atlantic Ocean, Benin and Cameroon',
                princepalRivers: 'Niger and Benue',
                legislativeBranch: 'Bicameral National Assembly, Senate and Federal House of Representatives',
                judiciaryBranch: 'State High Court, Court of Appeal and Supreme Court',
                timeZone: 'GMT + 1 (hour) (est) + 6',
                climate: 'Humid Sub-Tropical',
                legalSystem: 'Based on English Common Law, Islamic Law & Customary Law',
                taxSystem: 'Biritsh Oriented',
                businessHours: {
                    banks: '8.00 am - 4.00 pm (monday-friday) not all banks',
                    federalGovernmentOffices: '8.00 am - 4.00 pm (monday-friday)',
                    commercialOffices: '8.00 am - 5.00 pm (monday-friday); 9.00am - 6.00pm'
                },
            },
            States: [
                {
                    state: 'Abia',
                    capital: 'Umuahia',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '2, 845, 380',
                        _2016Projection: '3, 727, 300'
                    },
                    endSarsProtest: {   /** starting from the day of "TOLL-GATE SHOOTINGs" during OCT 2020 #EndSARS protest **/
                        condition: 'Very Serious',
                        noOfVictims: 9
                    },
                    LGAs: ['Aba North', 'Aba South', 'AroChukwu', 'Bende', 'Ikwuano', 'Isiala-Ngwa North', 'Isiala-Ngwa South', 'Isuikwato', 'Obi Nwa', 'Ohafia', 'Osisioma', 'Ngwa', 'Ugwuagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North', 'Umauhia North', 'Umu-Neochi'],
                    geoPoliticalZone: 'south East',
                    postalCode: 440001,
                    mineralResources: ['Marbie', 'Clay', 'Tentalite', 'Cassiterite', 'Gold (Partially Investigated)', 'Lead/Zinc (Traces)', 'Dolomite']
                },
                {
                    state: 'Adamawa',
                    capital: 'Yola',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '3, 178, 950',
                        _2016Projection: '4, 248, 400'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Demsa', 'Fufore', 'Ganye', 'Girei', 'Gombi', 'Guyuk', 'Hung', 'Jada', 'Jimeta', 'Lamurde', 'Madagali', 'Maiha', 'Mayo-Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numna', 'Shelling', 'Song', 'Toungo', 'Yola North', 'Yola South',],
                    geoPoliticalZone: 'North East',
                    postalCode: 640001,
                    mineralResources: ['Kaolin', 'Bentonite', 'Gypsium', 'Magnesite']
                },
                {
                    state: 'Akwa Ibom',
                    capital: 'Uyo',
                    createdAt: '27th September 1987',
                    population: {
                        _2006Census: '3, 902, 051',
                        _2016Projection: '5, 482, 200'
                    },
                    endSarsProtest: {
                        condition: 'Serious',
                        noOfVictims: 6,
                    },
                    LGAs: ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiono ibom', 'Ika', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat Enin', 'Nsit Atai', 'Nsit Ibom', 'Nsit Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam', 'Udug Uko', 'Ukanafun', 'Uruan', 'Urue-Offong/Oruko', 'Uyo'],
                    geoPoliticalZone: 'South South',
                    postalCode: 520001,
                    mineralResources: ['Lead/Zinc', 'Clay', 'Limestone', 'Uranium (Traced)', 'Salt', 'Lignite (Traced)']
                },
                {
                    state: 'Anambra',
                    capital: 'Awka',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '4, 177, 828',
                        _2016Projection: '5, 527, 800'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 20
                    },
                    LGAs: ['Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'],
                    geoPoliticalZone: 'South East',
                    postalCode: 420001,
                    mineralResources: ['Lead/Zinc', 'Clay', 'Limestone', 'Gypsium (Partially Investigated)', 'Salt', 'Glass-Sand', 'Phosphate', 'Gypsium']
                },
                {
                    state: 'Bauchi',
                    capital: 'Bauchi',
                    createdAt: '3rd February 1976',
                    population: {
                        _2006Census: '4, 653, 066',
                        _2016Projection: '6, 537, 300'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Ganjuwa', 'Giade', 'Ganjuwa', 'Giade', 'Itas/Gadau', "Jama'are", 'Katagum', 'Kirfi', 'Misau', 'Ningi', 'Shira', 'Tafawa-Balewa', 'Toro', 'Warji', 'Zaki'],
                    geoPoliticalZone: 'North East',
                    postalCode: 740001,
                    mineralResources: ['Amethst (Violet)', 'Gypsium', 'Lead/Zinc', 'Uranium (Partially Investigated)']
                },
                {
                    state: 'Bayelsa',
                    capital: 'Yenagoa',
                    createdAt: '1st October 1996',
                    population: {
                        _2006Census: '1, 704, 515',
                        _2016Projection: '2, 278, 000'
                    },
                    endSarsProtest: {
                        condition: 'Serious',
                        noOfVictims: 3
                    },
                    LGAs: ['Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Jaw', 'Yenegoa', 'Membe'],
                    zone: 'South South',
                    geoPoliticalZone: 561001,
                    mineralResources: ['Clay', 'Limestone', 'Gypsium (Partially Investigated)', 'Uranium (Partially Investigated)', 'Manganese', 'Lignite', 'Lead/Zinc (Traces)']
                },
                {
                    state: 'Benue',
                    capital: 'Makurdi',
                    createdAt: '3rd February 1976',
                    population: {
                        _2006Census: '4, 253, 641',
                        _2016Projection: '5, 741, 800'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 2
                    },
                    LGAs: ['Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kwande', 'Logo', 'Makurdi', 'Obi', 'Ogbadibo', 'Oju', 'Okpokwu', 'Ohimini', 'Oturkpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya'],
                    geoPoliticalZone: 'North Central',
                    postalCode: 970001,
                    mineralResources: ['Lead/Zinc', 'LimeStone', 'Iron-Ore', 'Coal', 'Clay', 'Marble', 'Salt', 'Berytes (traces)', 'Gem Stones', 'Gypsium']
                },
                {
                    state: 'Borno',
                    capital: 'Maiduguri',
                    createdAt: '3rd February 1976',
                    population: {
                        _2006Census: '4, 171, 104',
                        _2016Projection: '5, 860, 200'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Abadam', 'Askira/Uba', 'Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Hawul', 'Jere', 'Kaga', 'Kala/Balge', 'Konduga', 'Kukawa', 'Kwaya Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte', 'Mobbar', 'Monguno', 'Ngala', 'Nganzai', 'Shani'],
                    geoPoliticalZone: 'North East',
                    postalCode: 600001,
                    mineralResources: ['Diatomite', 'Clay', 'LimeStone', 'Hydro-Carbon (oil and gas) (Partially Investigated)', 'Gypsium', 'Kaolin', 'Bentonite']
                },
                {
                    state: 'Cross River',
                    capital: 'Calabar',
                    createdAt: '27th May 1967',
                    population: {
                        _2006Census: '2, 892, 988',
                        _2016Projection: '3, 866, 300'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 2
                    },
                    LGAs: ['Akpabuyo', 'Odukpani', 'Akamkpa', 'Biase', 'Abi', 'Ikom', 'Yarkur', 'Odubra', 'Boki', 'Ogoja', 'Yala', 'Obanliku', 'Obudu', 'Calabar South', 'Etung', 'Bekwara', 'Bakassi', 'Calabar Municipality'],
                    geoPoliticalZone: 'South South',
                    postalCode: 540001,
                    mineralResources: ['Limestone', 'Uranium', 'Manganese', 'Lignite', 'Lead/Zinc', 'Salt']
                },
                {
                    state: 'Delta',
                    capital: 'Asaba',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '4, 112, 445',
                        _2016Projection: '5, 663, 400'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 9
                    },
                    LGAs: ['Oshimili', 'Aniocha', 'Aniocha South', 'Ika South', 'Ika North-East', 'Ndokwa West', 'Ndokwa East', 'Isoko South', 'Isoko North', 'Bomadi', 'Burutu', 'Ughelli South', 'Ughelli North', 'Ethiope West', 'Ethiope East', 'Sapele', 'Okpe', 'Warri North', 'Warri South', 'Uvwie', 'Udu', 'Warri Central', 'Ukwani', 'Oshimili North', 'Patani'],
                    geoPoliticalZone: 'South South',
                    postalCode: 320001,
                    mineralResources: ['Marble', 'Glass-Sand', 'Clay', 'Gypsium', 'Lignite', 'Iron-Ore', 'Kaolin']
                },
                {
                    state: 'Ebonyi',
                    capital: 'Abakailki',
                    createdAt: '1st October 1996',
                    population: {
                        _2006Census: '2, 176, 947',
                        _2016Projection: '2, 880, 400'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 17
                    },
                    LGAs: ['Abakaliki', 'Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Ivo', 'Ohaozara', 'Onicha', 'Ohaukwu', 'Izzi'],
                    geoPoliticalZone: 'South East',
                    postalCode: 840001,
                    mineralResources: ['Lead/Zinc', 'Gold', 'Salt']
                },
                {
                    state: 'Edo',
                    capital: 'Benin City',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '3, 233, 366',
                        _2016Projection: '4, 235, 600'
                    },
                    endSarsProtest: {
                        condition: 'Serious',
                        noOfVictims: 5
                    },
                    LGAs: ['Akoko-Edo', 'Esan East', 'Esan South East', 'Esan Central', 'Esan West', 'Egor', 'Ukpoba', 'Etsako Central', 'Etsako', 'Igueben', 'Ivia North', 'Oredo', 'Ovia South-West', 'Ovia South-East', 'Owan West', 'Owan South', 'Orhionwon', 'Etsako East', 'Uhunwonde'],
                    geoPoliticalZone: 'South South',
                    postalCode: 300001,
                    mineralResources: ['Marbie', 'Lignite', 'Clay', 'Limestone', 'Iron-Ore', 'Gypsium', 'Glass-Sand', 'Gold', 'Dolomite Phosphate', 'Bitumen']
                },
                {
                    state: 'Ekiti',
                    capital: 'Ado-Ekiti',
                    createdAt: '1st October 1996',
                    population: {
                        _2006Census: '2, 398, 967',
                        _2016Projection: '3, 270, 800'
                    },
                    endSarsProtest: {
                        condition: 'Serious',
                        noOfVictims: 4
                    },
                    LGAs: ['Aiyekire', 'Ado Ekiti', 'Ekiti-East', 'Ekiti-West', 'Emure/Ise', 'Orun', 'Ekiti South-West', 'Ikere', 'Irepodun', 'Ijero', 'Ido', 'Osi', 'Oye', 'Ikole', 'Moba', 'Effon Alaiye', 'Ise/Orun', 'Iiejemeje'],
                    geoPoliticalZone: 'South West',
                    postalCode: 360001,
                    mineralResources: ['Kaolin', 'Feldspar', 'Tatium', 'Granite', 'Syenite']
                },
                {
                    state: 'Enugu',
                    capital: 'Enugu',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '3, 267, 837',
                        _2016Projection: '4, 411, 100'
                    },
                    endSarsProtest: {
                        condition: 'Serious',
                        noOfVictims: 3
                    },
                    LGAs: ['Enugu South', 'Igbo-Eze South', 'Enugu North', 'Nkanu', 'Udi Agwu', 'Oji-River', 'Ezeagu', 'Igbo Eze North', 'Isi-Uzo', 'Nsukka', 'Igbo-Ekiti', 'Uzo-Uwani', 'Enugu East', 'Aninri', 'Nkanu East', 'Nkanu East', 'Udenu'],
                    geoPoliticalZone: 'South East',
                    postalCode: 400001,
                    mineralResources: ['Coal', 'Limestone', 'Lead/Zinc']
                },
                {
                    state: 'Gombe',
                    capital: 'Gombe',
                    createdAt: '1st October 1996',
                    population: {
                        _2006Census: '2, 365, 040',
                        _2016Projection: '3, 257, 000'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Akko', 'Balanga', 'Billiri', 'Dukku', 'Kaltungo', 'Kwami', 'Shomogom', 'Funakaye', 'Gombe', 'Nafada/Bajoga', 'Yamaltu/Delta'],
                    geoPoliticalZone: 'North East',
                    postalCode: 760001,
                    mineralResources: ['Gemstone', 'Gypsium']
                },
                {
                    state: 'Imo',
                    capital: 'Owerri',
                    createdAt: '3rd February 1976',
                    population: {
                        _2006Census: '3, 927, 563',
                        _2016Projection: '5, 408, 800'
                    },
                    endSarsProtest: {
                        condition: 'Serious',
                        noOfVictims: 0
                    },
                    LGAs: ['Aboh-Mbaise', 'Ahiazu-Mbaise', 'Ehime-Mbano', 'Ezinhitte', 'Ideato North', 'Ideato South', 'Ihitte/Uboma', 'Ikeduru', 'Isiala Mbano', 'Isu', 'Mbaitoli', 'Ngor-Okpala', 'Njaba', 'Nwangele', 'Nkwerre', 'Obowo', 'Oguta', 'Ohaji/Egbema', 'Okigwe', 'Onuimo', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri', 'Owerri-North', 'Owerri-West'],
                    geoPoliticalZone: 'South East',
                    postalCode: 460001,
                    mineralResources: ['Lead/Zinc', 'Limestone', 'Lignite', 'Phosphate', 'Gypsium', 'Salt']
                },
                {
                    state: 'Jigawa',
                    capital: 'Dutse',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '4, 361, 002',
                        _2016Projection: '5, 828, 200'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Auyo', 'Babura', 'Birni Kudu', 'Biriniwa', 'Birnin-magaji', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram', 'Gwiwa', 'Hadeji', 'Jahun', 'Kafin Hausa', 'Kaugama', 'Kazaure', 'KiriKasamma', 'Maigatari', 'Malammaduri', 'Miga', 'Ringim', 'Roni', 'Sule-Tankarka', 'Taura', 'Yankwasi'],
                    geoPoliticalZone: 'North West',
                    postalCode: 720001,
                    mineralResources: ['Butytes']
                },
                {
                    state: 'Kaduna',
                    capital: 'Kaduna',
                    createdAt: '27th May 1967',
                    population: {
                        _2006Census: '6, 113, 503',
                        _2016Projection: '8, 252, 400'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Brnin-Gwari', 'Chukun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', "Jema's", 'Kachia', 'Kaduna North', 'Kaduna South', 'Kagarok', 'Kajuru', 'Kauru', 'Kubau', 'Kudan', 'Kere', 'Makarfi', 'Sabon-Gari', 'Sanga', 'Soba', 'Zango-Kataf', 'Zaria'],
                    geoPoliticalZone: 'North West',
                    postalCode: 700001,
                    mineralResources: ['Sapphire', 'Kaolin', 'Gold', 'Clay', 'Surpentinite', 'Asbestos', 'Amethyst', 'Kyanite', 'Graphite (Partially Investigated)', 'Silhnite', 'Mica (Traces)', 'Aqua marine', 'Ruby', 'Rock Crystal', 'Topaz', 'Flosper', 'Tourmaline', 'Gemstone', 'Tentalime']
                },
        
                {
                    state: 'Kano',
                    capital: 'Kano',
                    createdAt: '27th May 1967',
                    population: {
                        _2006Census: '9, 401, 288',
                        _2016Projection: '13, 076, 900'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Ajigi', 'Albasu', 'Bagwai', 'Bebji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun mallam', 'Gaya', 'Gazawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal', 'Karay', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunch', 'Kura', 'Maidobi', 'Makoda', 'Miinijibir', 'Nasarawa', 'Rano', 'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takali', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 'Warawa', 'Wudil'],
                    geoPoliticalZone: 'North West',
                    postalCode: 800001,
                    mineralResources: ['Cassiterite', 'Copper', 'Glass-Sand', 'Gemstone', 'Lead/Zinc', 'Tantalite']
                },
                {
                    state: 'Katsina',
                    capital: 'Katsina',
                    createdAt: '23rd September 1987',
                    population: {
                        _2006Census: '5, 801, 584',
                        _2016Projection: '7, 831, 300'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Bakori', 'Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dan Musa', 'Daura', 'Dutsi', "Dutsin 'Ma", 'Faskar', 'Furfi', 'Funtua', 'Ingawa', 'Jibiya', 'Kankara', 'Kankiya', 'Katsina', 'Kafur', 'Kaita', 'Kusada', "Mai'aduwa", 'Malumfashi', 'Mani', 'Mash', 'Matazu', 'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 'Zango'],
                    geoPoliticalZone: 'North West',
                    postalCode: 820001,
                    mineralResources: ['Kaolin', 'Marble', 'Salt']
                },
                {
                    state: 'Kebbi',
                    capital: 'Benin Kebbi',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '3, 256, 541',
                        _2016Projection: '4, 440, 000'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Aleiro', 'Arewa-Dandi', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Danko', 'Fakai', 'Gwandu', 'Jega', 'Kalgo', 'Koko/Besse', 'Maiyama', 'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu/Danko', 'Yauri', 'Zuru'],
                    geoPoliticalZone: 'North West',
                    postalCode: 860001,
                    mineralResources: ['Gold']
                },
                {
                    state: 'Kogi',
                    capital: 'Lokoja',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '3, 314, 043',
                        _2016Projection: '4, 473, 500'
                    },
                    endSarsProtest: {
                        condition: 'Serious',
                        noOfVictims: 2
                    },
                    LGAs: ['Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela-Odolu', 'Ijumu', 'Kogi', 'Lokoja', 'Mopa-Muro', 'Ofu', 'Ogori/Mangongo', 'Okehi', 'Okene', 'Olamabolo', 'Omala', 'Yagba East', 'Yagba West'],
                    geoPoliticalZone: 'North Central',
                    postalCode: 260001,
                    mineralResources: ['Iron-Ore', 'Kaolin', 'Gypsium', 'Feldspar', 'Coal', 'Marble', 'Dolomite', 'Talc', 'Tantalite']
                },
                {
                    state: 'Kwara',
                    capital: 'Ilron',
                    createdAt: '27th May 1967',
                    population: {
                        _2006Census: '2, 365, 353',
                        _2016Projection: '3, 192, 900'
                    },
                    endSarsProtest: {
                        condition: 'Serious',
                        noOfVictims: 4
                    },
                    LGAs: ['Asa', 'Baruten', 'Ede', 'Ekiti', 'Ifelodun', 'llorin East', 'llorin West', 'llorin South', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke-Ero', 'Oyun', 'Pategi'],
                    geoPoliticalZone: 'North Central',
                    postalCode: 240001,
                    mineralResources: ['Gold', 'Marble', 'Iron-ore', 'Cassiterite', 'Columbite', 'Tantalite', 'Feldspar (traces)', 'Mica (traces)']
                },
                {
                    state: 'Lagos',
                    capital: 'Ikeja',
                    createdAt: '27th May 1967',
                    population: {
                        _2006Census: '9, 113, 605',
                        _2016Projection: '12, 550, 600'
                    },
                    endSarsProtest: {
                        condition: 'Dangerously Serious',
                        noOfVictims: 91
                    },
                    LGAs: ['Agege', 'Ajerom-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 'Ibeju/Lekki', 'Ifako-Ijaye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-lsolo', 'Shomolu', 'Surulere'],
                    geoPoliticalZone: 'South West',
                    postalCode: '(main/island) 100001/101001',
                    mineralResources: ['Glass-sand', 'Clay', 'Bitumen']
                },
                {
                    state: 'Nasarawa',
                    capital: 'Lafia',
                    createdAt: '1st October 1996',
                    population: {
                        _2006Census: '1, 869, 377',
                        _2016Projection: '2, 523, 400'
                    },
                    endSarsProtest: {
                        condition: 'Serious',
                        noOfVictims: 1
                    },
                    LGAs: ['Akwanga', 'Awe', 'Doma', 'Karu', 'Keana', 'Keffi', 'Kokona', 'Laffia', 'Nasarawa', 'Nasarawa-Eggon', 'Obi', 'Toto', 'Wamba'],
                    geoPoliticalZone: 'North Central',
                    postalCode: 962001,
                    mineralResources: ['Beryl (emerald, acquamarine and Hellodor)', 'Dolomite/Marble', 'Sapphire', 'Tourmaline', 'Quartz', 'Amethyst (Topaz, garnet)', 'Zireon', 'Tantalite', 'Cassiterite', 'Columbite', 'Limenite', 'Galena', 'Iron-Ore', 'Barytes', 'Feldspar', 'Limestone', 'mica', 'Cooking coal', 'Talc', 'Clay', 'Salt', 'Chalcopyrite']
                },
                {
                    state: 'Niger',
                    capital: 'Minna',
                    createdAt: '3rd February 1976',
                    population: {
                        _2006Census: '3, 954, 772',
                        _2016Projection: '5, 556, 200'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 4
                    },
                    LGAs: ['Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora', 'Lapai', 'Lavun', 'Magama', 'Mariga', 'Mashegu', 'Mokwa', 'Muya', 'Pailoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja', 'Tafa', 'Wushishi'],
                    geoPoliticalZone: 'North Central',
                    postalCode: 920001,
                    mineralResources: ['Gold', 'Talc', 'Lead/Zinc']
                },
                {
                    state: 'Ogun',
                    capital: 'Abeokuta',
                    createdAt: '3rd February 1976',
                    population: {
                        _2006Census: '3, 751, 140',
                        _2016Projection: '5, 217, 700'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 6
                    },
                    LGAs: ['Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ifo', 'Ijebu East', 'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Ikenne', 'Imeko-Afon', 'Ipokia', 'Obafemi-Owode', 'Ogun Waterside', 'Odeda', 'Odogbolu', 'RemoNorth', 'Shagamu'],
                    geoPoliticalZone: 'South West',
                    postalCode: 110001,
                    mineralResources: ['Phosphate', 'Clay', 'Feldspar (traces)', 'Kaolin', 'Limestone', 'Gemstone', 'Bitumen']
                },
                {
                    state: 'Ondo',
                    capital: 'Akure',
                    createdAt: '3rd February 1976',
                    population: {
                        _2006Census: '3, 460, 877',
                        _2016Projection: '4, 671, 700'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 9
                    },
                    LGAs: ['Akoko North East', 'Akoko North West', 'Akoko South', 'Akure East', 'Akoko South West', 'Akure North', 'Akure South', 'Ese-Odo', 'Idanre', 'Ifedore', 'llaje', 'll-Oluji', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West', 'Ose', 'Owo'],
                    geoPoliticalZone: 'South West',
                    postalCode: 340001,
                    mineralResources: ['Bitumen', 'Kaolin', 'Gemstone', 'Gypsium', 'Feldspar', 'Granite', 'Clay', 'Glass-sand', 'Dimension Stones', 'Limestone', 'Coal']
                },
                {
                    state: 'Osun',
                    capital: 'Osogbo',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '3, 416, 959',
                        _2016Projection: '4, 705, 600'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 7
                    },
                    LGAs: ['Aiyedade', 'Aiyedire', 'Atakumosa East', 'Atakumosa West', 'Boluwaduro', 'Boripe', 'Ede North', 'Ede South', 'Egbedore', 'Ejigbo', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Ifedayo', 'Ifelodun', 'lla', 'llehsa East', 'llsha West', 'Irepodun', 'Irewle', 'Isokan', 'Iwo', 'Obokun', 'Odo-Otin', 'Ola-Oluwa', 'Olorunda', 'Oriade', 'Orolu', 'Osogbo'],
                    geoPoliticalZone: 'South West',
                    postalCode: 230001,
                    mineralResources: ['Gold', 'Tal', 'Tantalite', 'Tourmaline', 'Columbite', 'Granite']
                },
                {
                    state: 'Oyo',
                    capital: 'Ibadan',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '5, 580, 894',
                        _2016Projection: '7, 840, 900'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 5
                    },
                    LGAs: ['Afijio', 'Akinyele', 'Attba', 'Atigbo', 'Egbeda', 'Ifeloju', 'Ibadan', 'Ibadan Central', 'Ibadan North', 'Ibadan North East', 'Ibadan South East', 'Ibadan South West', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Irepo', 'Iseyin', 'Itesiwaju', 'Iwajowa', 'Kajola', 'Lagelu', 'Ogbomosho North', 'Ogbmosho South', 'Ogo Oluwa', 'Olorunsogo', 'Oluyole', 'Ona-Ara', 'Orelope', 'Orire', 'Oyo East', 'Oyo West', 'Saki East', 'Saki West', 'Surulere'],
                    geoPoliticalZone: 'South West',
                    postalCode: 200001,
                    mineralResources: ['Kaolin', 'Marble', 'Clay', 'Sillimanite', 'Talc', 'Gold', 'Cassiterite', 'Aqua Marine', 'Dolomite', 'Gemstone', 'Tantalite']
                },
                {
                    state: 'Plateau',
                    capital: 'Jos',
                    createdAt: '3rd February 1976',
                    population: {
                        _2006Census: '3, 206, 531',
                        _2016Projection: '4, 200, 400'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 4
                    },
                    LGAs: ['Barikin Ladi', 'Bassa', 'Bokkos', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang North', 'Langtang South', 'Mangu', 'Mikang', 'Pankshin', "Qua'an Pan", 'Riyom', 'Shendem', 'Wase'],
                    geoPoliticalZone: 'North Central',
                    postalCode: 930001,
                    mineralResources: ['Emerald', 'Tin', 'Marble', 'Grante', 'Tantalite/Colmbite', 'Lead/Zinc', 'Barytes', 'Iron-Ore', 'Kaolin', 'Betonite', 'Cassiterite', 'Phrochiore', 'Clay', 'Coal', 'Wolfam', 'Slat', 'Bismuth', 'Fluoride', 'Molybdenite', 'Gemstone', 'Bauxite']
                },
                {
                    state: 'Rivers',
                    capital: 'Port Harcourt',
                    createdAt: '27th May 1967',
                    population: {
                        _2006Census: '5, 198, 716',
                        _2016Projection: '7, 303, 900'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 5
                    },
                    LGAs: ['Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Emohua', 'Eleme', 'Etche', 'Gokana', 'Ikwerre', 'Khana', 'Obia/Akpor', 'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okirika', 'Omumma', 'Opobo/Nkoro', 'Oyigbo', 'Port-Harcourt', 'Tai'],
                    geoPoliticalZone: 'South South',
                    postalCode: 500001,
                    mineralResources: ['Glass-sand', 'Clay', 'Marble', 'Lignite (traces)']
                },
                {
                    state: 'Sokoto',
                    capital: 'Sokoto',
                    createdAt: '3rd February 1976',
                    population: {
                        _2006Census: '3, 702, 676',
                        _2016Projection: '4, 998, 100'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Binji', 'Bodinga', 'Dange-Shnsi', 'Gada', 'Goronyo', 'Gudu', 'Gawabawa', 'lllela', 'Kware', 'Kebbe', 'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tqngaza', 'Tureta', 'Wamako', 'Wurno', 'Yabo'],
                    geoPoliticalZone: 'North West',
                    postalCode: 840001,
                    mineralResources: ['Kaolin', 'Gold', 'Limestone', 'Phosphate', 'Gypsium', 'Silca-sand', 'Clay', 'Laterite', 'Poyash', 'Flakes', 'Granite', 'Gold', 'Salt']
                },
                {
                    state: 'Taraba',
                    capital: 'Jalingo',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '2, 294, 819',
                        _2016Projection: '3, 068, 800'
                    },
                    endSarsProtest: {
                        condition: 'Very Serious',
                        noOfVictims: 10
                    },
                    LGAs: ['Ardo-Kola', 'Bali', 'Donga', 'Gashaka', 'Cassol', 'Ibi', 'Jalingo', 'Karin-Lamido', 'Kurmi', 'Lau', 'Sardauna', 'Takum', 'Ussa', 'Wukari', 'Yorro', 'Zing'],
                    geoPoliticalZone: 'North East',
                    postalCode: 660001,
                    mineralResources: ['Kaolin', 'Lead/Zinc']
                },
                {
                    state: 'Yobe',
                    capital: 'Damaturu',
                    createdAt: '27th August 1991',
                    population: {
                        _2006Census: '2, 321, 339',
                        _2016Projection: '3, 294, 100'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Bade', 'Borsari', 'Damaturu', 'Fika', 'Fune', 'Gashua', 'Geidam', 'Gujba', 'Gulani', 'Gogaram', 'Jakusko', 'Karasuwa', 'Machina', 'Nagere', 'Nguru Potiskum', 'Tarmua', 'Yunusari', 'Yusufari'],
                    geoPoliticalZone: 'North East',
                    postalCode: 320001,
                    mineralResources: ['Tintomite', 'Soda Ash (Partially investigated)']
                },
                {
                    state: 'Zamfara',
                    capital: 'Gusau',
                    createdAt: '1st October 1996',
                    population: {
                        _2006Census: '3, 278, 873',
                        _2016Projection: '4, 515, 400'
                    },
                    endSarsProtest: {
                        condition: 'No Protest',
                        noOfVictims: 0
                    },
                    LGAs: ['Anka', 'Bakura', 'Birnin Magaji', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura', 'Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata Mafara', 'Tsafe', 'Zurmi'],
                    geoPoliticalZone: 'North West',
                    postalCode: 860001,
                    mineralResources: ['Coal', 'Cotton', 'Gold']
                },
            ]
    
    })
})


//quiz bank to serve
const qBank = [
    {
        question: "who is the first indeginous president of Nigeria?",
        answers: ["Lord Lugard", "Tafawa Belewa", " Dr Nnamdi Azikwe", "Dr Obafemi Awolowo"],
        correct: "Dr Nnamdi Azikwe",
        questionId: "1254"
    },
    {
        question: "Who killed Abraham Lincoln?",
        answers: ["John Wilkis Boot", "charles Taylor", "Issac turner", "Dr Obafemi Awolowo"],
        correct: "John Wilkis Boot",
        questionId: "1374"
    },
    {
        question: "Nigerian Golden Eaglet first gold medal was in the year?",
        answers: ["1980", "1950", "1985", "1993"],
        correct: "1985",
        questionId: "1384"
    },
    {
        question: "Who was the first Nigerian Revolutionary?",
        answers: ["Micheal Anifero", "Kaduna Nzeogwu", "Chukwuemeka Ojukwu", "Multala Muhamhed"],
        correct: "Kaduna Nzeogwu",
        questionId: "1386"
    },
    {
        question: "who scored Nigeria's winning goal in Atlanta 1996",
        answers: ["Jay Jay Okocha", "Tarigbo West", "Kanu Nwankwo", "Christain Chwukwu"],
        correct: "Kanu Nwankwo",
        questionId: "9999"
    },
    {
        question: "In Nigeria where is Center for Musium",
        answers: ["Abia", "Lagos", "Kaduna", "Abuja"],
        correct: "Lagos",
        questionId: "2277"
    },
    {
        question: "Who was the First Nigerian to die why playing for Nigeria?",
        answers: ["Sam Okparaji", "Kmemo yanta", "Obinna Anyiro", "Dede mbukpa"],
        correct: "Sam Okparaji",
        questionId: "5676"
    },
    {
        question: "What was the immidate cause of Nigerian Civil War?",
        answers: ["to unite the Country", "to eliminate a particular group", "misunderstanding", "failing to keep the Aburi Accord"],
        correct: "failing to keep the Aburi Accord",
        questionId: "1334"
    },
    {
        question: "Yar dua died in the Year?",
        answers: ["2009", "2013", "2010", "2008"],
        correct: "2009",
        questionId: "2314"
    },
    {
        question: "Nnamdi Azikwe died in the Year?",
        answers: ["1996", "1995", "1997", "1999"],
        correct: "1996",
        questionId: "1241"
    },
    {
        question: "Who was/is the World's greatest Player?",
        answers: ["Diego Marardona", "Pele", "Jay Jay Okocha", "Sam Okparaji"],
        correct: "Diego Maradona",
        questionId: "1915"
    },
    {
        question: "Diego Maradona died in the year?",
        answers: ["2020", "2021", "2019", "2018"],
        correct: "2020",
        questionId: "1934"
    },
    {
        question: "Define Nigeria",
        answers: ["A country", "A business Enterprise", "An Organisation", "A Tribe"],
        correct: "A Country",
        questionId: "1977"
    },
    {
        question: "Who was the Leader of 9/11",
        answers: ["Osama Bin Laden", "Alqidia", "Geroge Bush", "America Capitalist"],
        correct: "Osama Bin Laden",
        questionId: "1988"
    },
    {
        question: "Where is Nnamdi Kanu",
        answers: ["I don't know", "Israel", "Biafra", "Europe"],
        correct: "Israel",
        questionId: "1955"
    },
    {
        question: "Why are you fighting?",
        answers: ["To survive", "To make money", "To help others", "For Posterity"],
        correct: "For Posterity",
        questionId: "1922"
    },
    {
        question: "Why do you think Africans are backward",
        answers: ["No Innovations", "Bad Government", "Thinking Capacity", "No Plans"],
        correct: "Bad Government",
        questionId: "1945"
    },
    {
        question: "A Nigerian Politican is a?",
        answers: ["Criminal", "Ruler", "Business Man", "Leader"],
        correct: "Business Man",
        questionId: "1923"
    },
    {
        question: "Who was the first to hurt your dear Life?",
        answers: ["parents", "Siblings", "Friend", "Boy Friend"],
        correct: "Friend",
        questionId: "1914"
    },
    {
        question: "Who invented Facebook?",
        answers: ["Mark", "Mathew", "John de Baptist", "James"],
        correct: "Mark",
        questionId: "1992"
    },
    {
        question: "Where is our Planet",
        answers: ["Inhabitable Zone", "Nice place", "Far from the sun", "Close to the sun"],
        correct: "Inhabitable Zone",
        questionId: "1999"
    },
    {
        question: "Who was the last Nigerian Military Head of State",
        answers: ["General Abacha", "Gen Abubakar", "Gen Obasanjo", "Gen Buhari"],
        correct: "Gen Abubakar",
        questionId: "1995"
    },
    {
        question: "Why do we have Democracy",
        answers: ["To allow checks and balances", "To give the masses a voice", "To reduce tyranny in Leadership", "To deceive the people"],
        correct: "To give the masses a voice",
        questionId: "1912"
    },
    {
        question: "Who did you love most",
        answers: ["Parents", "siblings", "Boy friend", "Girl Friend"],
        correct: "Parents",
        questionId: "1214"
    },
    {
        question: "What would you do if you where not afraid?",
        answers: ["Change the World", "Heal the World", "Hack the World", "Rule the World"],
        correct: "!Heal the World",
        questionId: "1511"
    }
]



//  *** string to generate from... ***
const random_word_generator = [
    'pretty', 'hard', 'disco', 'team work', 'hello world', 'perfect game',
    'dangerious', 'temptation', 'cross carpet', 'Nnamdi Azikwe', 'Obafemi Awolowo',
    'Nigeria', 'Revolution', 'Government', 'hello mars', 'hello universe', 'coding',
    'hello dimma', 'hello Gen Ben', 'hello JSON', 'hello mum', 'hello collins', 'dark web',
    'fucking foy', 'ghost worker', 'fury', 'perfect stranger', 'dinainfo', 'enemy lines',
    'floras secret', 'wild child', 'sarcrifice', 'javascript', 'terminal', 'console',
    'United States of America', 'ghana', 'hospital', 'programming', 'debug console', 'jeans',
    'component', 'playground', 'package json', 'timeline', 'style sheet', 'filter method',
    'social problems', 'social change', 'rule the world', 'natural science', 'rising sun',
    'machine code', 'spider monkey', 'javascript engine', 'grapghql injection', 'machine learning',
    'url endcoded', 'random string', 'nigerian army', 'nigerian airforce', 'nigerian navy',
    'Chinue Achebe', 'princess Alexandra', 'university of Nigeria', 'benjamin ozumba', 'chief',
    'literature in English', 'things fall apart', 'ethnographic masterpiece', 'trouble with Nigeria',
    'African culture', 'encyclopaedic', 'cultural specialists', 'literary giant', 'selector',
    'single quotes', 'double quote', 'epistemology', 'animal farm', 'man down', 'unfaithful',
    'Agbeze Aligbo', 'total Nigeria', 'God Promise', 'Rhapsody Realities'
]

// airtime to upload
const recharge = [
    69485351513491757, 24961063985592613
]


// home page
app.get('', (req, res) => {
    res.render('index', {
        title: 'Finder App',
        name: 'Agbeze Obinna'
    })
})


//about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Agbeze Obinna',
        aboutApp: 'This mini App was primarily designed to give you easy access to Information of various States in Nigeria. You can also access the API End Point'
    })
})


//help page
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Agbeze Obinna',
        helpMsg: 'Dear user, if you need any help dont fail to contact me!'
    })
})


// serve quiz end-point
// 127.0.0.1:3000/quiz?limit=Number **Number aspa key=value**
app.get('/quiz', (req, res) => {
    res.send({quiz: qBank.sort(() => 0.5 - Math.random()).slice(0, req.query.limit || 5)})
})


// serving basic movement in JSON
app.get('/puzzle', (req, res) => {
    res.send({
        Word_Generator: random_word_generator.sort(() => 0.6 - Math.random()).slice(0, 1)[0]
    })
})


// serving give away aspa airtime
// 127.0.0.1:3000/Rbank?recharge=airtime
app.get('/Rbank', (req, res) => {
    if (!req.query.recharge) {
        return res.status(404).send({ error: 'you are not allowed to view this information' })
    }
    res.send({ MTN: recharge.sort(() => 0.9 - Math.random()).slice(0, 1)[0] })
})


// serving biography
// 127.0.0.1:3000/bio?personal=profile
app.get('/bio', (req, res) => {

    if (!req.query.personal) {
        return res.send({
            Error: 'you are not allowed to view this information'
        })
    }
    res.send({
        profile: {
            name: 'Agbeze Aligbo Obinna Ephraim David',
            age: 25,
            likes: ['Football', 'coding', 'penetration testing'],
            occupation: 'Back-End Developer (NodeJs)',
            about: 'I dont have time to check time, it is what it is. so in time, there is no time!',
            target: 'intercept CBN API and heal the World',
            Besties: {
                names: ['General BN Nwankwo', 'Nora', '(JSON)', 'Ella', 'Collins', 'Ernest', 'Madukaife', 'NwankwoJr', 'Lato-Babe', 'Naria-BamBam', 'OBO', 'Chika']
            }
        }
    })
})


// get and serve weather Api (via a function call)
app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'you must provide an address term'
        })

    }

    geoCodeFunc(req.query.address, (error, { latitude, longtitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecastFunc(longtitude, latitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })

        })

    })
})


// serve error page
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'Ephraim David',
        errorMesg: 'Page not Found! check yur url'
    })
})


// serving error page while accessing wrong url
app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'Ephraim David',
        errorMesg: 'page not found!'
    })
})


//server is always up and running
app.listen(port, () => {
    console.log('server up on port: ' + port)
})

// Oct 2020
//me  - +2349034861410
// my Wife - +2347087081208
