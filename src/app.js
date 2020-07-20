//  ...for the love of a Nation!
//          

 //            LAND OF THE RISING SUN!


const path = require('path')
const express = require('express')
const hbs = require('hbs')

const forecastFunc = require('./utils/forecast')
const geoCodeFunc = require('./utils/geocode')

// set up a server
const app = express()
const port = process.env.PORT || 3000

//define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPaths = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPaths)

//setup static directory to serve
app.use(express.static(publicDir))

// home page
app.get( '', (req, res) => {
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

// Nigerian States End Point!   
app.get('/states', (req, res) => {

    res.send([
        {
            copyRight: 'Agbeze Aligbo Obinna July 2020'
        },
         {
    officalName: 'Nigeria',
    Independence: 1960,
    population: '+ 180, 000, 000',
    majorTribes: ['Hausa', 'Yoruba', 'Igbo'],
    currency: ['naria', 'kobo (currently not in use)'],
    states: 36,
    capital:'Abuja',
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
  },
     
       { 
        businessHours: {
            banks: '8.00 am - 4.00 pm (monday-friday) not all banks',
            federalGovernmentOffices: '8.00 am - 4.00 pm (monday-friday)',
            commercialOffices: '8.00 am - 5.00 pm (monday-friday); 9.00am - 6.00pm'   
        }
  
    },
 {
    state: 'Abia',
    capital: 'Umuahia',
    creation: '27th August 1991',
    population: ['2, 845, 380', '3, 727, 300'],
    LGAs: ['Aba North', 'Aba South', 'AroChukwu', 'Bende', 'Ikwuano', 'Isiala-Ngwa North', 'Isiala-Ngwa South', 'Isuikwato', 'Obi Nwa', 'Ohafia', 'Osisioma', 'Ngwa', 'Ugwuagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North', 'Umauhia North', 'Umu-Neochi'],
    zone: 'south East',
    postalCode: 440001,
    mineralResources: ['Marbie', 'Clay', 'Tentalite', 'Cassiterite', 'Gold (Partially Investigated)', 'Lead/Zinc (Traces)', 'Dolomite']
},
 {
    state:'Adamawa',
    capital: 'Yola',
    creation: '27th August 1991',
    population: ['3, 178, 950', '4, 248, 400'],
    LGAs: ['Demsa', 'Fufore', 'Ganye', 'Girei', 'Gombi', 'Guyuk', 'Hung', 'Jada', 'Jimeta', 'Lamurde', 'Madagali', 'Maiha', 'Mayo-Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numna', 'Shelling', 'Song', 'Toungo', 'Yola North', 'Yola South',],
    zone: 'North East',
    postalCode: 640001,
    mineralResources: ['Kaolin', 'Bentonite', 'Gypsium', 'Magnesite']
},
 {
    state: 'Akwa Ibom',
    capital: 'Uyo',
    creation: '27th September 1987',
    population: ['3, 902, 051', '5, 482, 200'],
    LGAs: ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiono ibom', 'Ika', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat Enin', 'Nsit Atai', 'Nsit Ibom', 'Nsit Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam', 'Udug Uko', 'Ukanafun', 'Uruan', 'Urue-Offong/Oruko', 'Uyo'],
    zone: 'South South',
    postalCode: 520001,
    mineralResources: ['Lead/Zinc', 'Clay', 'Limestone', 'Uranium (Traced)', 'Salt', 'Lignite (Traced)']
},
 {
    state: 'Anambra',
    capital: 'Awka',
    creation: '27th August 1991',
    population: ['4, 177, 828', '5, 527, 800'],
    LGAs: ['Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'],
    zone: 'South East',
    postalCode: 420001,
    mineralResources: ['Lead/Zinc', 'Clay', 'Limestone', 'Gypsium (Partially Investigated)', 'Salt', 'Glass-Sand', 'Phosphate', 'Gypsium']
},
 {
    state: 'Bauchi',
    capital: 'Bauchi',
    creation: '3rd February 1976',
    population: ['4, 653, 066', '6, 537, 300'],
    LGAs: ['Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Ganjuwa', 'Giade', 'Ganjuwa', 'Giade', 'Itas/Gadau', "Jama'are", 'Katagum', 'Kirfi', 'Misau', 'Ningi', 'Shira', 'Tafawa-Balewa', 'Toro', 'Warji', 'Zaki'],
    zone: 'North East',
    postalCode: 740001,
    mineralResources: ['Amethst (Violet)', 'Gypsium', 'Lead/Zinc', 'Uranium (Partially Investigated)']
},
 {
    state: 'Bayelsa',
    capital: 'Yenagoa',
    creation: '1st October 1996',
    population: ['1, 704, 515', '2, 278, 000'],
    LGAs: ['Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Jaw', 'Yenegoa', 'Membe'],
    zone: 'South South',
    postalCode: 561001,
    mineralResources: ['Clay', 'Limestone', 'Gypsium (Partially Investigated)', 'Uranium (Partially Investigated)', 'Manganese', 'Lignite', 'Lead/Zinc (Traces)']
},
 {
    state: 'Benue',
    capital: 'Makurdi',
    creation: '3rd February 1976',
    population: ['4, 253, 641', '5, 741, 800'],
    LGAs: ['Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kwande', 'Logo', 'Makurdi', 'Obi', 'Ogbadibo', 'Oju', 'Okpokwu', 'Ohimini', 'Oturkpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya'],
    zone: 'North Central',
    postalCode: 970001,
    mineralResources: ['Lead/Zinc', 'LimeStone', 'Iron-Ore', 'Coal', 'Clay', 'Marble', 'Salt', 'Berytes (traces)', 'Gem Stones', 'Gypsium']
},
 {
    state: 'Borno',
    capital: 'Maiduguri',
    creation: '3rd February 1976',
    population: ['4, 171, 104', '5, 860, 200'],
    LGAs: ['Abadam', 'Askira/Uba', 'Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Hawul', 'Jere', 'Kaga', 'Kala/Balge', 'Konduga', 'Kukawa', 'Kwaya Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte', 'Mobbar', 'Monguno', 'Ngala', 'Nganzai', 'Shani'],
    zone: 'North East',
    postalCode: 600001,
    mineralResources: ['Diatomite', 'Clay', 'LimeStone', 'Hydro-Carbon (oil and gas) (Partially Investigated)', 'Gypsium', 'Kaolin', 'Bentonite']
},
 {
    state: 'Cross River',
    capital: 'Calabar',
    creation: '27th May 1967',
    population: ['2, 892, 988', '3, 866, 300'],
    LGAs: ['Akpabuyo', 'Odukpani', 'Akamkpa', 'Biase', 'Abi', 'Ikom', 'Yarkur', 'Odubra', 'Boki', 'Ogoja', 'Yala', 'Obanliku', 'Obudu', 'Calabar South', 'Etung', 'Bekwara','Bakassi', 'Calabar Municipality'],
    zone: 'South South',
    postalCode: 540001,
    mineralResources: ['Limestone', 'Uranium', 'Manganese', 'Lignite', 'Lead/Zinc', 'Salt']
},
 {
    state: 'Delta',
    capital: 'Asaba',
    creation: '27th August 1991',
    population: ['4, 112, 445', '5, 663, 400'],
    LGAs: ['Oshimili', 'Aniocha', 'Aniocha South', 'Ika South', 'Ika North-East', 'Ndokwa West', 'Ndokwa East', 'Isoko South', 'Isoko North', 'Bomadi', 'Burutu' , 'Ughelli South', 'Ughelli North', 'Ethiope West', 'Ethiope East', 'Sapele', 'Okpe', 'Warri North', 'Warri South', 'Uvwie', 'Udu', 'Warri Central', 'Ukwani', 'Oshimili North', 'Patani'],
    zone: 'South South',
    postalCode: 320001,
    mineralResources: ['Marble', 'Glass-Sand', 'Clay', 'Gypsium', 'Lignite', 'Iron-Ore', 'Kaolin']
},
{
    state: 'Ebonyi',
    capital: 'Abakailki',
    creation: '1st October 1996',
    population: ['2, 176, 947', '2, 880, 400'],
    LGAs: ['Abakaliki', 'Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Ivo', 'Ohaozara', 'Onicha', 'Ohaukwu', 'Izzi'],
    zone: 'South East',
    postalCode: 840001,
    mineralResources: ['Lead/Zinc', 'Gold', 'Salt']
},
{
    state: 'Edo',
    capital: 'Benin City',
    creation: '27th August 1991',
    population: ['3, 233, 366', '4, 235, 600'],
    LGAs: [ 'Akoko-Edo', 'Esan East', 'Esan South East', 'Esan Central', 'Esan West', 'Egor', 'Ukpoba', 'Etsako Central', 'Etsako', 'Igueben', 'Ivia North', 'Oredo', 'Ovia South-West', 'Ovia South-East', 'Owan West', 'Owan South', 'Orhionwon', 'Etsako East', 'Uhunwonde'],
    zone: 'South South',
    postalCode: 300001,
    mineralResources: ['Marbie', 'Lignite', 'Clay', 'Limestone', 'Iron-Ore', 'Gypsium', 'Glass-Sand', 'Gold', 'Dolomite Phosphate', 'Bitumen']
},
 {
    state: 'Ekiti',
    capital: 'Ado-Ekiti',
    creation: '1st October 1996',
    population: ['2, 398, 967', '3, 270, 800'],
    LGAs: [ 'Aiyekire', 'Ado Ekiti', 'Ekiti-East', 'Ekiti-West', 'Emure/Ise', 'Orun', 'Ekiti South-West', 'Ikere', 'Irepodun', 'Ijero', 'Ido', 'Osi', 'Oye', 'Ikole', 'Moba',  'Effon Alaiye', 'Ise/Orun', 'Iiejemeje'],
    zone: 'South West',
    postalCode: 360001,
    mineralResources: ['Kaolin', 'Feldspar', 'Tatium', 'Granite', 'Syenite']
},
{
    state: 'Enugu',
    capital: 'Enugu',
    creation: '27th August 1991',
    population: ['3, 267, 837', '4, 411, 100'],
    LGAs: ['Enugu South', 'Igbo-Eze South', 'Enugu North', 'Nkanu', 'Udi Agwu', 'Oji-River', 'Ezeagu', 'Igbo Eze North', 'Isi-Uzo', 'Nsukka', 'Igbo-Ekiti', 'Uzo-Uwani', 'Enugu East', 'Aninri', 'Nkanu East', 'Nkanu East', 'Udenu'],
    zone: 'South East', 
    postalCode: 400001,
    mineralResources: ['Coal', 'Limestone', 'Lead/Zinc']
},
{
    state: 'Gombe',
    capital: 'Gombe',
    creation: '1st October 1996',
    population: ['2, 365, 040', '3, 257, 000'],
    LGAs: ['Akko', 'Balanga', 'Billiri', 'Dukku', 'Kaltungo', 'Kwami', 'Shomogom', 'Funakaye', 'Gombe', 'Nafada/Bajoga', 'Yamaltu/Delta'],
    zone: 'North East',
    postalCode: 760001,
    mineralResources: ['Gemstone', 'Gypsium']
},
{
    state: 'Imo',
    capital: 'Owerri',
    creation: '3rd February 1976',
    population: ['3, 927, 563', '5, 408, 800'],
    LGAs: ['Aboh-Mbaise', 'Ahiazu-Mbaise', 'Ehime-Mbano', 'Ezinhitte', 'Ideato North', 'Ideato South', 'Ihitte/Uboma', 'Ikeduru', 'Isiala Mbano', 'Isu', 'Mbaitoli', 'Ngor-Okpala', 'Njaba', 'Nwangele', 'Nkwerre', 'Obowo', 'Oguta', 'Ohaji/Egbema', 'Okigwe', 'Onuimo', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri', 'Owerri-North', 'Owerri-West'],
    zone: 'South East',
    postalCode: 460001,
    mineralResources: ['Lead/Zinc', 'Limestone', 'Lignite', 'Phosphate', 'Gypsium', 'Salt']
},
{
    state: 'Jigawa',
    capital: 'Dutse',
    creation: '27th August 1991',
    population: ['4, 361, 002', '5, 828, 200'],
    LGAs: ['Auyo', 'Babura', 'Birni Kudu', 'Biriniwa', 'Birnin-magaji', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram', 'Gwiwa', 'Hadeji', 'Jahun', 'Kafin Hausa', 'Kaugama', 'Kazaure', 'KiriKasamma', 'Maigatari', 'Malammaduri', 'Miga', 'Ringim', 'Roni', 'Sule-Tankarka', 'Taura', 'Yankwasi'],
    zone: 'North West',
    postalCode: 720001,
    mineralResources: ['Butytes']
},
{
    state: 'Kaduna',
    capital: 'Kaduna',
    creation: '27th May 1967',
    population: ['6, 113, 503', '8, 252, 400'],
    LGAs: ['Brnin-Gwari', 'Chukun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', "Jema's", 'Kachia', 'Kaduna North', 'Kaduna South', 'Kagarok', 'Kajuru', 'Kauru', 'Kubau', 'Kudan', 'Kere', 'Makarfi', 'Sabon-Gari', 'Sanga', 'Soba', 'Zango-Kataf', 'Zaria'],
    zone: 'North West',
    postalCode: 700001,
    mineralResources: ['Sapphire', 'Kaolin', 'Gold', 'Clay', 'Surpentinite', 'Asbestos', 'Amethyst', 'Kyanite', 'Graphite (Partially Investigated)', 'Silhnite', 'Mica (Traces)', 'Aqua marine', 'Ruby', 'Rock Crystal', 'Topaz', 'Flosper', 'Tourmaline', 'Gemstone', 'Tentalime']
},

{
    state: 'Kano',
    capital: 'Kano',
    creation: '27th May 1967',
    population: ['9, 401, 288', '13, 076, 900'],
    LGAs: ['Ajigi', 'Albasu', 'Bagwai', 'Bebji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun mallam', 'Gaya', 'Gazawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal', 'Karay', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunch', 'Kura', 'Maidobi', 'Makoda', 'Miinijibir', 'Nasarawa', 'Rano', 'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takali', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 'Warawa', 'Wudil'],
    zone: 'North West',
    postalCode: 800001,
    mineralResources: ['Cassiterite', 'Copper', 'Glass-Sand', 'Gemstone', 'Lead/Zinc', 'Tantalite']
},
{
    state: 'Katsina',
    capital: 'Katsina',
    creation: '23rd September 1987',
    population: ['5, 801, 584', '7, 831, 300'],
    LGAs: ['Bakori', 'Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dan Musa', 'Daura', 'Dutsi', "Dutsin 'Ma", 'Faskar', 'Furfi', 'Funtua', 'Ingawa', 'Jibiya', 'Kankara', 'Kankiya', 'Katsina', 'Kafur', 'Kaita', 'Kusada', "Mai'aduwa", 'Malumfashi', 'Mani', 'Mash', 'Matazu', 'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 'Zango'],
    zone: 'North West',
    postalCode: 820001,
    mineralResources: ['Kaolin', 'Marble', 'Salt']
},
{
    state: 'Kebbi',
    capital: 'Benin Kebbi',
    creation: '27th August 1991',
    population: ['3, 256, 541', '4, 440, 000'],
    LGAs: ['Aleiro', 'Arewa-Dandi', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Danko', 'Fakai', 'Gwandu', 'Jega', 'Kalgo', 'Koko/Besse', 'Maiyama', 'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu/Danko', 'Yauri', 'Zuru'],
    zone: 'North West',
    postalCode: 860001,
    mineralResources: ['Gold']
},
{
    state: 'Kogi',
    capital: 'Lokoja',
    creation: '27th August 1991',
    population: ['3, 314, 043', '4, 473, 500'],
    LGAs: ['Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela-Odolu', 'Ijumu', 'Kogi', 'Lokoja', 'Mopa-Muro', 'Ofu', 'Ogori/Mangongo', 'Okehi', 'Okene', 'Olamabolo', 'Omala', 'Yagba East', 'Yagba West'],
    zone: 'North Central',
    postalCode: 260001,
    mineralResources: ['Iron-Ore', 'Kaolin', 'Gypsium', 'Feldspar', 'Coal', 'Marble', 'Dolomite', 'Talc', 'Tantalite']
},
{
    state: 'Kwara',
    capital: 'Ilron',
    creation: '27th May 1967',
    population: ['2, 365, 353', '3, 192, 900'],
    LGAs: ['Asa', 'Baruten', 'Ede', 'Ekiti', 'Ifelodun', 'llorin East', 'llorin West', 'llorin South', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke-Ero', 'Oyun', 'Pategi'],
    zone: 'North Central',
    postalCode: 240001,
    mineralResources: ['Gold', 'Marble', 'Iron-ore', 'Cassiterite', 'Columbite', 'Tantalite', 'Feldspar (traces)', 'Mica (traces)']
},
{
    state: 'Lagos',
    capital: 'Ikeja',
    creation: '27th May 1967',
    population: ['9, 113, 605', '12, 550, 600'],
    LGAs: ['Agege', 'Ajerom-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 'Ibeju/Lekki', 'Ifako-Ijaye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-lsolo', 'Shomolu', 'Surulere'],
    zone: 'South West',
    postalCode: '(main/island) 100001/101001',
    mineralResources: ['Glass-sand', 'Clay', 'Bitumen']
},
{
    state: 'Nasarawa',
    capital: 'Lafia',
    creation: '1st October 1996',
    population: ['1, 869, 377', '2, 523, 400'],
    LGAs: ['Akwanga', 'Awe', 'Doma', 'Karu', 'Keana', 'Keffi', 'Kokona', 'Laffia', 'Nasarawa', 'Nasarawa-Eggon', 'Obi', 'Toto', 'Wamba'],
    zone: 'North Central',
    postalCode: 962001,
    mineralResources: ['Beryl (emerald, acquamarine and Hellodor)', 'Dolomite/Marble', 'Sapphire', 'Tourmaline', 'Quartz', 'Amethyst (Topaz, garnet)', 'Zireon', 'Tantalite', 'Cassiterite', 'Columbite', 'Limenite', 'Galena', 'Iron-Ore', 'Barytes', 'Feldspar', 'Limestone', 'mica', 'Cooking coal', 'Talc', 'Clay', 'Salt', 'Chalcopyrite']
},
{
    state: 'Niger',
    capital: 'Minna',
    creation: '3rd February 1976',
    population: ['3, 954, 772', '5, 556, 200'],
    LGAs: ['Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora', 'Lapai', 'Lavun', 'Magama', 'Mariga', 'Mashegu', 'Mokwa', 'Muya', 'Pailoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja', 'Tafa', 'Wushishi'],
    zone: 'North Central',
    postalCode: 920001,
    mineralResources: ['Gold', 'Talc', 'Lead/Zinc']
},
{
    state: 'Ogun',
    capital: 'Abeokuta',
    creation: '3rd February 1976',
    population: ['3, 751, 140', '5, 217, 700'],
    LGAs: ['Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ifo', 'Ijebu East', 'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Ikenne', 'Imeko-Afon', 'Ipokia', 'Obafemi-Owode', 'Ogun Waterside', 'Odeda', 'Odogbolu', 'RemoNorth', 'Shagamu'],
    zone: 'South West',
    postalCode: 110001,
    mineralResources: ['Phosphate', 'Clay', 'Feldspar (traces)', 'Kaolin', 'Limestone', 'Gemstone', 'Bitumen']
},
{
    state: 'Ondo',
    capital: 'Akure',
    creation: '3rd February 1976',
    population: ['3, 460, 877', '4, 671, 700'],
    LGAs: ['Akoko North East', 'Akoko North West', 'Akoko South', 'Akure East', 'Akoko South West', 'Akure North', 'Akure South', 'Ese-Odo', 'Idanre', 'Ifedore', 'llaje', 'll-Oluji', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West', 'Ose', 'Owo'],
    zone: 'South West',
    postalCode: 340001,
    mineralResources: ['Bitumen', 'Kaolin', 'Gemstone', 'Gypsium', 'Feldspar', 'Granite', 'Clay', 'Glass-sand', 'Dimension Stones', 'Limestone', 'Coal']
},
{
    state: 'Osun',
    capital: 'Osogbo',
    creation: '27th August 1991',
    population: ['3, 416, 959', '4, 705, 600'],
    LGAs: ['Aiyedade', 'Aiyedire', 'Atakumosa East', 'Atakumosa West', 'Boluwaduro', 'Boripe', 'Ede North', 'Ede South', 'Egbedore', 'Ejigbo', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Ifedayo', 'Ifelodun', 'lla', 'llehsa East', 'llsha West', 'Irepodun', 'Irewle', 'Isokan', 'Iwo', 'Obokun', 'Odo-Otin', 'Ola-Oluwa', 'Olorunda', 'Oriade', 'Orolu', 'Osogbo'],
    zone: 'South West',
    postalCode: 230001,
    mineralResources: ['Gold', 'Tal', 'Tantalite', 'Tourmaline', 'Columbite', 'Granite']
},
{
    state: 'Oyo',
    capital: 'Ibadan',
    creation: '27th August 1991',
    population: ['5, 580, 894', '7, 840, 900'],
    LGAs: ['Afijio', 'Akinyele', 'Attba', 'Atigbo', 'Egbeda', 'Ifeloju', 'Ibadan', 'Ibadan Central', 'Ibadan North', 'Ibadan North East', 'Ibadan South East', 'Ibadan South West', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Irepo', 'Iseyin', 'Itesiwaju', 'Iwajowa', 'Kajola', 'Lagelu', 'Ogbomosho North', 'Ogbmosho South', 'Ogo Oluwa', 'Olorunsogo', 'Oluyole', 'Ona-Ara', 'Orelope', 'Orire', 'Oyo East', 'Oyo West', 'Saki East', 'Saki West', 'Surulere'],
    zone: 'South West',
    postalCode: 200001,
    mineralResources: ['Kaolin', 'Marble', 'Clay', 'Sillimanite', 'Talc', 'Gold', 'Cassiterite', 'Aqua Marine', 'Dolomite', 'Gemstone', 'Tantalite']
},
{
    state: 'Plateau',
    capital: 'Jos',
    creation: '3rd February 1976',
    population: ['3, 206, 531', '4, 200, 400'],
    LGAs: ['Barikin Ladi', 'Bassa', 'Bokkos', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang North', 'Langtang South', 'Mangu', 'Mikang', 'Pankshin', "Qua'an Pan", 'Riyom', 'Shendem', 'Wase'],
    zone: 'North Central',
    postalCode: 930001,
    mineralResources: ['Emerald', 'Tin', 'Marble', 'Grante', 'Tantalite/Colmbite', 'Lead/Zinc', 'Barytes', 'Iron-Ore', 'Kaolin', 'Betonite', 'Cassiterite', 'Phrochiore', 'Clay', 'Coal', 'Wolfam', 'Slat', 'Bismuth', 'Fluoride', 'Molybdenite', 'Gemstone', 'Bauxite']
},
{
    state: 'Rivers',
    capital: 'Port Harcourt',
    creation: '27th May 1967',
    population: ['5, 198, 716', '7, 303, 900'],
    LGAs: ['Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Emohua', 'Eleme', 'Etche', 'Gokana', 'Ikwerre', 'Khana', 'Obia/Akpor', 'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okirika', 'Omumma', 'Opobo/Nkoro', 'Oyigbo', 'Port-Harcourt', 'Tai'],
    zone: 'South South',
    postalCode: 500001,
    mineralResources: ['Glass-sand', 'Clay', 'Marble', 'Lignite (traces)']
},
{
    state: 'Sokoto',
    capital: 'Sokoto',
    creation: '3rd February 1976',
    population: ['3, 702, 676', '4, 998, 100'],
    LGAs: ['Binji', 'Bodinga', 'Dange-Shnsi', 'Gada', 'Goronyo', 'Gudu', 'Gawabawa', 'lllela', 'Kware', 'Kebbe', 'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tqngaza', 'Tureta', 'Wamako', 'Wurno', 'Yabo'],
    zone: 'North West',
    postalCode: 840001,
    mineralResources: ['Kaolin', 'Gold', 'Limestone', 'Phosphate', 'Gypsium', 'Silca-sand', 'Clay', 'Laterite', 'Poyash', 'Flakes', 'Granite', 'Gold', 'Salt']
},
{
    state: 'Taraba',
    capital: 'Jalingo',
    creation: '27th August 1991',
    population: ['2, 294, 819', '3, 068, 800 '],
    LGAs: ['Ardo-Kola', 'Bali', 'Donga', 'Gashaka', 'Cassol', 'Ibi', 'Jalingo', 'Karin-Lamido', 'Kurmi', 'Lau', 'Sardauna', 'Takum', 'Ussa', 'Wukari', 'Yorro', 'Zing'],
    zone: 'North East',
    postalCode: 660001,
    mineralResources: ['Kaolin', 'Lead/Zinc']
},
{
    state: 'Yobe',
    capital: 'Damaturu',
    creation: '27th August 1991',
    population: ['2, 321, 339', '3, 294, 100'],
    LGAs: ['Bade', 'Borsari', 'Damaturu', 'Fika', 'Fune', 'Gashua', 'Geidam', 'Gujba', 'Gulani', 'Gogaram', 'Jakusko', 'Karasuwa', 'Machina', 'Nagere', 'Nguru Potiskum', 'Tarmua', 'Yunusari', 'Yusufari'],
    zone: 'North East',
    postalCode: 320001,
    mineralResources: ['Tintomite', 'Soda Ash (Partially investigated)']
},
{
    state: 'Zamfara',
    capital: 'Gusau',
    creation: '1st October 1996',
    population: ['3, 278, 873', '4, 515, 400'],
    LGAs: ['Anka', 'Bakura', 'Birnin Magaji', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura', 'Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata Mafara', 'Tsafe', 'Zurmi'],
    zone: 'North West',
    postalCode: 860001,
    mineralResources: ['Coal', 'Cotton', 'Gold']
},
    ])
})

app.get('/history', (req, res) => {

    if (!req.query.personal) {
      return  res.send({
            Error: 'you are not allowed to view this information'
        })
    }
    res.send({
        History:{
            name: 'Ephraim David',
            age: 24,
            likes: ['SBEB', 'coding'],
            required: ['ok i might appear to be wicked or selfish and thats me! the truth is that am a nice guy living in an alpha Society'],
            target: 'intercept CBN API'
        },
        Besties: {
            name: '2nd Lt Ben',
            otherName: ['Nora', 'Ella', 'Collins', 'Ernest', 'Madukaife', 'NwankwoJr', 'Lato-Babe', 'Naria-BamBam', 'OBO', 'Chika']
        }
    })
})


app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'you must provide an address term'
        })

    }

    geoCodeFunc(req.query.address, ( error, { latitude, longtitude, location } = {}) => {
      if (error) {
        return  res.send({ error })
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

app.get('/product', (req, res) => {

    if (!req.query.search) {
       return  res.send({
         error: 'you must provide a search term'
        })
    }

    res.send({
        product: [{name: 'football', prize: 3000}]
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'Ephraim David',
        errorMesg: 'Page not Found! look forward to a better society!'
    })
})



app.get('*',(req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'Ephraim David',
        errorMesg: 'page not found!'
    })
})

app.listen(port, () => {
    console.log('serving @ port: ' + port)
})


//me  - +2349034861410
// my Wife - +2347087081208