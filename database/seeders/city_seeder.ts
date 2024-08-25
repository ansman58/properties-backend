import City from '#models/city'
import State from '#models/state'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    const cities = [
      { name: 'Aba', stateName: 'Abia' },
      { name: 'Amaigbo', stateName: 'Abia' },
      { name: 'Arochukwu', stateName: 'Abia' },
      { name: 'Bende', stateName: 'Abia' },
      { name: 'Ohafia-Ifigh', stateName: 'Abia' },
      { name: 'Umuahia', stateName: 'Abia' },
      { name: 'Abuja', stateName: 'Abuja' },
      { name: 'Kuje', stateName: 'Abuja' },
      { name: 'Kwali', stateName: 'Abuja' },
      { name: 'Madala', stateName: 'Abuja' },
      { name: 'Bamburu', stateName: 'Abuja' },
      { name: 'Gwarinpa', stateName: 'Abuja' },
      { name: 'Gwagwalada', stateName: 'Abuja' },
      { name: 'Maitama', stateName: 'Abuja' },
      { name: 'Garki', stateName: 'Abuja' },
      { name: 'Asokoro', stateName: 'Abuja' },
      { name: 'Karu', stateName: 'Abuja' },
      { name: 'Kubwa', stateName: 'Abuja' },
      { name: 'Kurunduma', stateName: 'Abuja' },
      { name: 'Jikwoyi', stateName: 'Abuja' },
      { name: 'Zuba', stateName: 'Abuja' },
      { name: 'Wuse', stateName: 'Abuja' },
      { name: 'Ganye', stateName: 'Adamawa' },
      { name: 'Gombi', stateName: 'Adamawa' },
      { name: 'Holma', stateName: 'Adamawa' },
      { name: 'Jimeta', stateName: 'Adamawa' },
      { name: 'Madagali', stateName: 'Adamawa' },
      { name: 'Mayo-Belwa', stateName: 'Adamawa' },
      { name: 'Mubi', stateName: 'Adamawa' },
      { name: 'Ngurore', stateName: 'Adamawa' },
      { name: 'Numan', stateName: 'Adamawa' },
      { name: 'Toungo', stateName: 'Adamawa' },
      { name: 'Yola', stateName: 'Adamawa' },
      { name: 'Eket', stateName: 'Akwa Ibom' },
      { name: 'Esuk Oron', stateName: 'Akwa Ibom' },
      { name: 'Ikot Ekpene', stateName: 'Akwa Ibom' },
      { name: 'Itu', stateName: 'Akwa Ibom' },
      { name: 'Uyo', stateName: 'Akwa Ibom' },
      { name: 'Agulu', stateName: 'Anambra' },
      { name: 'Atani', stateName: 'Anambra' },
      { name: 'Awka', stateName: 'Anambra' },
      { name: 'Enugu-Ukwu', stateName: 'Anambra' },
      { name: 'Igbo-Ukwu', stateName: 'Anambra' },
      { name: 'Ihiala', stateName: 'Anambra' },
      { name: 'Nkpor', stateName: 'Anambra' },
      { name: 'Nnewi', stateName: 'Anambra' },
      { name: 'Onitsha', stateName: 'Anambra' },
      { name: 'Ozubulu', stateName: 'Anambra' },
      { name: 'Uga', stateName: 'Anambra' },
      { name: 'Uruobo-Okija', stateName: 'Anambra' },
      { name: 'Azare', stateName: 'Bauchi' },
      { name: 'Bauchi', stateName: 'Bauchi' },
      { name: 'Boi', stateName: 'Bauchi' },
      { name: 'Bununu', stateName: 'Bauchi' },
      { name: 'Darazo', stateName: 'Bauchi' },
      { name: 'Dass', stateName: 'Bauchi' },
      { name: 'Dindima', stateName: 'Bauchi' },
      { name: 'Disina', stateName: 'Bauchi' },
      { name: 'Gabarin', stateName: 'Bauchi' },
      { name: 'Gwaram', stateName: 'Bauchi' },
      { name: 'Kari', stateName: 'Bauchi' },
      { name: 'Lame', stateName: 'Bauchi' },
      { name: 'Lere', stateName: 'Bauchi' },
      { name: 'Madara', stateName: 'Bauchi' },
      { name: 'Misau', stateName: 'Bauchi' },
      { name: 'Sade', stateName: 'Bauchi' },
      { name: 'Yamrat', stateName: 'Bauchi' },
      { name: 'Yanda Bayo', stateName: 'Bauchi' },
      { name: 'Yuli', stateName: 'Bauchi' },
      { name: 'Zadawa', stateName: 'Bauchi' },
      { name: 'Zalanga', stateName: 'Bauchi' },
      { name: 'Amassoma', stateName: 'Bayelsa' },
      { name: 'Twon-Brass', stateName: 'Bayelsa' },
      { name: 'Yenagoa', stateName: 'Bayelsa' },
      { name: 'Aliade', stateName: 'Benue' },
      { name: 'Boju', stateName: 'Benue' },
      { name: 'Igbor', stateName: 'Benue' },
      { name: 'Makurdi', stateName: 'Benue' },
      { name: 'Ochobo', stateName: 'Benue' },
      { name: 'Otukpa', stateName: 'Benue' },
      { name: 'Takum', stateName: 'Benue' },
      { name: 'Ugbokpo', stateName: 'Benue' },
      { name: 'Yandev', stateName: 'Benue' },
      { name: 'Zaki Biam', stateName: 'Benue' },
      { name: 'Gboko', stateName: 'Benue' },
      { name: 'Bama', stateName: 'Borno' },
      { name: 'Benisheikh', stateName: 'Borno' },
      { name: 'Biu', stateName: 'Borno' },
      { name: 'Bornu Yassu', stateName: 'Borno' },
      { name: 'Damasak', stateName: 'Borno' },
      { name: 'Damboa', stateName: 'Borno' },
      { name: 'Dikwa', stateName: 'Borno' },
      { name: 'Gamboru', stateName: 'Borno' },
      { name: 'Gwoza', stateName: 'Borno' },
      { name: 'Kukawa', stateName: 'Borno' },
      { name: 'Magumeri', stateName: 'Borno' },
      { name: 'Maiduguri', stateName: 'Borno' },
      { name: 'Marte', stateName: 'Borno' },
      { name: 'Miringa', stateName: 'Borno' },
      { name: 'Monguno', stateName: 'Borno' },
      { name: 'Ngala', stateName: 'Borno' },
      { name: 'Shaffa', stateName: 'Borno' },
      { name: 'Shani', stateName: 'Borno' },
      { name: 'Tokombere', stateName: 'Borno' },
      { name: 'Uba', stateName: 'Borno' },
      { name: 'Wuyo', stateName: 'Borno' },
      { name: 'Yajiwa', stateName: 'Borno' },
      { name: 'Akankpa', stateName: 'Cross River' },
      { name: 'Calabar', stateName: 'Cross River' },
      { name: 'Gakem', stateName: 'Cross River' },
      { name: 'Ikang', stateName: 'Cross River' },
      { name: 'Ugep', stateName: 'Cross River' },
      { name: 'Abraka', stateName: 'Delta' },
      { name: 'Agbor', stateName: 'Delta' },
      { name: 'Asaba', stateName: 'Delta' },
      { name: 'Bomadi', stateName: 'Delta' },
      { name: 'Burutu', stateName: 'Delta' },
      { name: 'Kwale', stateName: 'Delta' },
      { name: 'Obiaruku', stateName: 'Delta' },
      { name: 'Ogwashi-Uku', stateName: 'Delta' },
      { name: 'Orerokpe', stateName: 'Delta' },
      { name: 'Patani', stateName: 'Delta' },
      { name: 'Sapele', stateName: 'Delta' },
      { name: 'Ughelli', stateName: 'Delta' },
      { name: 'Umunede', stateName: 'Delta' },
      { name: 'Warri', stateName: 'Delta' },
      { name: 'Abakaliki', stateName: 'Ebonyi' },
      { name: 'Afikpo', stateName: 'Ebonyi' },
      { name: 'Effium', stateName: 'Ebonyi' },
      { name: 'Ezza-Ohu', stateName: 'Ebonyi' },
      { name: 'Isieke', stateName: 'Ebonyi' },
      { name: 'Agenebode', stateName: 'Edo' },
      { name: 'Auchi', stateName: 'Edo' },
      { name: 'Benin City', stateName: 'Edo' },
      { name: 'Ekpoma', stateName: 'Edo' },
      { name: 'Igarra', stateName: 'Edo' },
      { name: 'Illushi', stateName: 'Edo' },
      { name: 'Siluko', stateName: 'Edo' },
      { name: 'Ubiaja', stateName: 'Edo' },
      { name: 'Uromi', stateName: 'Edo' },
      { name: 'Ado-Ekiti', stateName: 'Ekiti' },
      { name: 'Aramoko-Ekiti', stateName: 'Ekiti' },
      { name: 'Efon-Alaaye', stateName: 'Ekiti' },
      { name: 'Emure-Ekiti', stateName: 'Ekiti' },
      { name: 'Ifaki', stateName: 'Ekiti' },
      { name: 'Igbara-Odo', stateName: 'Ekiti' },
      { name: 'Igede-Ekiti', stateName: 'Ekiti' },
      { name: 'Ijero-Ekiti', stateName: 'Ekiti' },
      { name: 'Ikere-Ekiti', stateName: 'Ekiti' },
      { name: 'Ipoti', stateName: 'Ekiti' },
      { name: 'Ise-Ekiti', stateName: 'Ekiti' },
      { name: 'Oke Ila', stateName: 'Ekiti' },
      { name: 'Omuo-Ekiti', stateName: 'Ekiti' },
      { name: 'Adani', stateName: 'Enugu' },
      { name: 'Ake-Eze', stateName: 'Enugu' },
      { name: 'Aku', stateName: 'Enugu' },
      { name: 'Amagunze', stateName: 'Enugu' },
      { name: 'Awgu', stateName: 'Enugu' },
      { name: 'Eha Amufu', stateName: 'Enugu' },
      { name: 'Enugu', stateName: 'Enugu' },
      { name: 'Enugu-Ezike', stateName: 'Enugu' },
      { name: 'Ete', stateName: 'Enugu' },
      { name: 'Ikem', stateName: 'Enugu' },
      { name: 'Mberubu', stateName: 'Enugu' },
      { name: 'Nsukka', stateName: 'Enugu' },
      { name: 'Obolo-Eke (1)', stateName: 'Enugu' },
      { name: 'Opi', stateName: 'Enugu' },
      { name: 'Udi', stateName: 'Enugu' },
      { name: 'Akko', stateName: 'Gombe' },
      { name: 'Bara', stateName: 'Gombe' },
      { name: 'Billiri', stateName: 'Gombe' },
      { name: 'Dadiya', stateName: 'Gombe' },
      { name: 'Deba', stateName: 'Gombe' },
      { name: 'Dukku', stateName: 'Gombe' },
      { name: 'Garko', stateName: 'Gombe' },
      { name: 'Gombe', stateName: 'Gombe' },
      { name: 'Hinna', stateName: 'Gombe' },
      { name: 'Kafarati', stateName: 'Gombe' },
      { name: 'Kaltungo', stateName: 'Gombe' },
      { name: 'Kumo', stateName: 'Gombe' },
      { name: 'Nafada', stateName: 'Gombe' },
      { name: 'Pindiga', stateName: 'Gombe' },
      { name: 'Iho', stateName: 'Imo' },
      { name: 'Oguta', stateName: 'Imo' },
      { name: 'Okigwe', stateName: 'Imo' },
      { name: 'Orlu', stateName: 'Imo' },
      { name: 'Orodo', stateName: 'Imo' },
      { name: 'Owerri', stateName: 'Imo' },
      { name: 'Babura', stateName: 'Jigawa' },
      { name: 'Birnin Kudu', stateName: 'Jigawa' },
      { name: 'Birniwa', stateName: 'Jigawa' },
      { name: 'Dutse', stateName: 'Jigawa' },
      { name: 'Gagarawa', stateName: 'Jigawa' },
      { name: 'Gumel', stateName: 'Jigawa' },
      { name: 'Gwaram', stateName: 'Jigawa' },
      { name: 'Hadejia', stateName: 'Jigawa' },
      { name: 'Kafin Hausa', stateName: 'Jigawa' },
      { name: 'Kazaure', stateName: 'Jigawa' },
      { name: 'Kiyawa', stateName: 'Jigawa' },
      { name: 'Mallammaduri', stateName: 'Jigawa' },
      { name: 'Ringim', stateName: 'Jigawa' },
      { name: 'Samamiya', stateName: 'Jigawa' },
      { name: 'Anchau', stateName: 'Kaduna' },
      { name: 'Burumburum', stateName: 'Kaduna' },
      { name: 'Dutsen Wai', stateName: 'Kaduna' },
      { name: 'Hunkuyi', stateName: 'Kaduna' },
      { name: 'Kachia', stateName: 'Kaduna' },
      { name: 'Kaduna', stateName: 'Kaduna' },
      { name: 'Kafanchan', stateName: 'Kaduna' },
      { name: 'Kagoro', stateName: 'Kaduna' },
      { name: 'Kajuru', stateName: 'Kaduna' },
      { name: 'Kujama', stateName: 'Kaduna' },
      { name: 'Lere', stateName: 'Kaduna' },
      { name: 'Mando', stateName: 'Kaduna' },
      { name: 'Saminaka', stateName: 'Kaduna' },
      { name: 'Soba', stateName: 'Kaduna' },
      { name: 'Sofo-Birnin-Gwari', stateName: 'Kaduna' },
      { name: 'Zaria', stateName: 'Kaduna' },
      { name: 'Dan Gora', stateName: 'Kano' },
      { name: 'Gaya', stateName: 'Kano' },
      { name: 'Kano', stateName: 'Kano' },
      { name: 'Danja', stateName: 'Katsina' },
      { name: 'Dankama', stateName: 'Katsina' },
      { name: 'Daura', stateName: 'Katsina' },
      { name: 'Dutsin-Ma', stateName: 'Katsina' },
      { name: 'Funtua', stateName: 'Katsina' },
      { name: 'Gora', stateName: 'Katsina' },
      { name: 'Jibia', stateName: 'Katsina' },
      { name: 'Jikamshi', stateName: 'Katsina' },
      { name: 'Kankara', stateName: 'Katsina' },
      { name: 'Katsina', stateName: 'Katsina' },
      { name: 'Mashi', stateName: 'Katsina' },
      { name: 'Ruma', stateName: 'Katsina' },
      { name: 'Runka', stateName: 'Katsina' },
      { name: 'Wagini', stateName: 'Katsina' },
      { name: 'Argungu', stateName: 'Kebbi' },
      { name: 'Bagudo', stateName: 'Kebbi' },
      { name: 'Bena', stateName: 'Kebbi' },
      { name: 'Bin Yauri', stateName: 'Kebbi' },
      { name: 'Birnin Kebbi', stateName: 'Kebbi' },
      { name: 'Dabai', stateName: 'Kebbi' },
      { name: 'Dakingari', stateName: 'Kebbi' },
      { name: 'Gulma', stateName: 'Kebbi' },
      { name: 'Gwandu', stateName: 'Kebbi' },
      { name: 'Jega', stateName: 'Kebbi' },
      { name: 'Kamba', stateName: 'Kebbi' },
      { name: 'Kangiwa', stateName: 'Kebbi' },
      { name: 'Kende', stateName: 'Kebbi' },
      { name: 'Mahuta', stateName: 'Kebbi' },
      { name: 'Maiyama', stateName: 'Kebbi' },
      { name: 'Shanga', stateName: 'Kebbi' },
      { name: 'Wasagu', stateName: 'Kebbi' },
      { name: 'Zuru', stateName: 'Kebbi' },
      { name: 'Abocho', stateName: 'Kogi' },
      { name: 'Adoru', stateName: 'Kogi' },
      { name: 'Ankpa', stateName: 'Kogi' },
      { name: 'Bugana', stateName: 'Kogi' },
      { name: 'Dekina', stateName: 'Kogi' },
      { name: 'Egbe', stateName: 'Kogi' },
      { name: 'Icheu', stateName: 'Kogi' },
      { name: 'Idah', stateName: 'Kogi' },
      { name: 'Isanlu-Itedoijowa', stateName: 'Kogi' },
      { name: 'Kabba', stateName: 'Kogi' },
      { name: 'Koton-Karfe', stateName: 'Kogi' },
      { name: 'Lokoja', stateName: 'Kogi' },
      { name: 'Ogaminana', stateName: 'Kogi' },
      { name: 'Ogurugu', stateName: 'Kogi' },
      { name: 'Okene', stateName: 'Kogi' },
      { name: 'Ajasse Ipo', stateName: 'Kwara' },
      { name: 'Bode Saadu', stateName: 'Kwara' },
      { name: 'Gwasero', stateName: 'Kwara' },
      { name: 'Ilorin', stateName: 'Kwara' },
      { name: 'Jebba', stateName: 'Kwara' },
      { name: 'Kaiama', stateName: 'Kwara' },
      { name: 'Lafiagi', stateName: 'Kwara' },
      { name: 'Offa', stateName: 'Kwara' },
      { name: 'Okuta', stateName: 'Kwara' },
      { name: 'Omu-Aran', stateName: 'Kwara' },
      { name: 'Patigi', stateName: 'Kwara' },
      { name: 'Suya', stateName: 'Kwara' },
      { name: 'Yashikera', stateName: 'Kwara' },
      { name: 'Apapa', stateName: 'Lagos' },
      { name: 'Badagry', stateName: 'Lagos' },
      { name: 'Ebute Ikorodu', stateName: 'Lagos' },
      { name: 'Ejirin', stateName: 'Lagos' },
      { name: 'Epe', stateName: 'Lagos' },
      { name: 'Ikeja', stateName: 'Lagos' },
      { name: 'Lagos', stateName: 'Lagos' },
      { name: 'Makoko', stateName: 'Lagos' },
      { name: 'Buga', stateName: 'Nasarawa' },
      { name: 'Doma', stateName: 'Nasarawa' },
      { name: 'Keffi', stateName: 'Nasarawa' },
      { name: 'Lafia', stateName: 'Nasarawa' },
      { name: 'Nasarawa', stateName: 'Nasarawa' },
      { name: 'Wamba', stateName: 'Nasarawa' },
      { name: 'Auna', stateName: 'Niger' },
      { name: 'Babana', stateName: 'Niger' },
      { name: 'Badeggi', stateName: 'Niger' },
      { name: 'Baro', stateName: 'Niger' },
      { name: 'Bokani', stateName: 'Niger' },
      { name: 'Duku', stateName: 'Niger' },
      { name: 'Ibeto', stateName: 'Niger' },
      { name: 'Konkwesso', stateName: 'Niger' },
      { name: 'Kontagora', stateName: 'Niger' },
      { name: 'Kusheriki', stateName: 'Niger' },
      { name: 'Kuta', stateName: 'Niger' },
      { name: 'Lapai', stateName: 'Niger' },
      { name: 'Minna', stateName: 'Niger' },
      { name: 'New Shagunnu', stateName: 'Niger' },
      { name: 'Suleja', stateName: 'Niger' },
      { name: 'Tegina', stateName: 'Niger' },
      { name: 'Ukata', stateName: 'Niger' },
      { name: 'Wawa', stateName: 'Niger' },
      { name: 'Zungeru', stateName: 'Niger' },
      { name: 'Abeokuta', stateName: 'Ogun' },
      { name: 'Ado Odo', stateName: 'Ogun' },
      { name: 'Idi Iroko', stateName: 'Ogun' },
      { name: 'Ifo', stateName: 'Ogun' },
      { name: 'Ijebu-Ife', stateName: 'Ogun' },
      { name: 'Ijebu-Igbo', stateName: 'Ogun' },
      { name: 'Ijebu-Ode', stateName: 'Ogun' },
      { name: 'Ilaro', stateName: 'Ogun' },
      { name: 'Imeko', stateName: 'Ogun' },
      { name: 'Iperu', stateName: 'Ogun' },
      { name: 'Isara', stateName: 'Ogun' },
      { name: 'Owode', stateName: 'Ogun' },
      { name: 'Agbabu', stateName: 'Ondo' },
      { name: 'Akure', stateName: 'Ondo' },
      { name: 'Idanre', stateName: 'Ondo' },
      { name: 'Ifon', stateName: 'Ondo' },
      { name: 'Ilare', stateName: 'Ondo' },
      { name: 'Ode', stateName: 'Ondo' },
      { name: 'Ondo', stateName: 'Ondo' },
      { name: 'Ore', stateName: 'Ondo' },
      { name: 'Owo', stateName: 'Ondo' },
      { name: 'Apomu', stateName: 'Osun' },
      { name: 'Ejigbo', stateName: 'Osun' },
      { name: 'Gbongan', stateName: 'Osun' },
      { name: 'Ijebu-Jesa', stateName: 'Osun' },
      { name: 'Ikire', stateName: 'Osun' },
      { name: 'Ikirun', stateName: 'Osun' },
      { name: 'Ila Orangun', stateName: 'Osun' },
      { name: 'Ile-Ife', stateName: 'Osun' },
      { name: 'Ilesa', stateName: 'Osun' },
      { name: 'Ilobu', stateName: 'Osun' },
      { name: 'Inisa', stateName: 'Osun' },
      { name: 'Iwo', stateName: 'Osun' },
      { name: 'Modakeke', stateName: 'Osun' },
      { name: 'Oke Mesi', stateName: 'Osun' },
      { name: 'Olupona', stateName: 'Osun' },
      { name: 'Osogbo', stateName: 'Osun' },
      { name: 'Otan Ayegbaju', stateName: 'Osun' },
      { name: 'Oyan', stateName: 'Osun' },
      { name: 'Ago Are', stateName: 'Oyo' },
      { name: 'Alapa', stateName: 'Oyo' },
      { name: 'Fiditi', stateName: 'Oyo' },
      { name: 'Ibadan', stateName: 'Oyo' },
      { name: 'Igbeti', stateName: 'Oyo' },
      { name: 'Igbo-Ora', stateName: 'Oyo' },
      { name: 'Igboho', stateName: 'Oyo' },
      { name: 'Kisi', stateName: 'Oyo' },
      { name: 'Lalupon', stateName: 'Oyo' },
      { name: 'Ogbomoso', stateName: 'Oyo' },
      { name: 'Okeho', stateName: 'Oyo' },
      { name: 'Orita Eruwa', stateName: 'Oyo' },
      { name: 'Oyo', stateName: 'Oyo' },
      { name: 'Saki', stateName: 'Oyo' },
      { name: 'Amper', stateName: 'Plateau' },
      { name: 'Bukuru', stateName: 'Plateau' },
      { name: 'Dengi', stateName: 'Plateau' },
      { name: 'Jos', stateName: 'Plateau' },
      { name: 'Kwolla', stateName: 'Plateau' },
      { name: 'Langtang', stateName: 'Plateau' },
      { name: 'Pankshin', stateName: 'Plateau' },
      { name: 'Panyam', stateName: 'Plateau' },
      { name: 'Vom', stateName: 'Plateau' },
      { name: 'Yelwa', stateName: 'Plateau' },
      { name: 'Abalama', stateName: 'Rivers' },
      { name: 'Abonnema', stateName: 'Rivers' },
      { name: 'Ahoada', stateName: 'Rivers' },
      { name: 'Bori', stateName: 'Rivers' },
      { name: 'Buguma', stateName: 'Rivers' },
      { name: 'Chokocho', stateName: 'Rivers' },
      { name: 'Elele', stateName: 'Rivers' },
      { name: 'Obonoma', stateName: 'Rivers' },
      { name: 'Omoku', stateName: 'Rivers' },
      { name: 'Onne', stateName: 'Rivers' },
      { name: 'Opobo', stateName: 'Rivers' },
      { name: 'Port Harcourt', stateName: 'Rivers' },
      { name: 'Rumuokoro', stateName: 'Rivers' },
      { name: 'Binji', stateName: 'Sokoto' },
      { name: 'Dange', stateName: 'Sokoto' },
      { name: 'Gandi', stateName: 'Sokoto' },
      { name: 'Goronyo', stateName: 'Sokoto' },
      { name: 'Gwadabawa', stateName: 'Sokoto' },
      { name: 'Illela', stateName: 'Sokoto' },
      { name: 'Rabah', stateName: 'Sokoto' },
      { name: 'Sokoto', stateName: 'Sokoto' },
      { name: 'Tambuwal', stateName: 'Sokoto' },
      { name: 'Wurno', stateName: 'Sokoto' },
      { name: 'Baissa', stateName: 'Taraba' },
      { name: 'Beli', stateName: 'Taraba' },
      { name: 'Gassol', stateName: 'Taraba' },
      { name: 'Gembu', stateName: 'Taraba' },
      { name: 'Ibi', stateName: 'Taraba' },
      { name: 'Jalingo', stateName: 'Taraba' },
      { name: 'Lau', stateName: 'Taraba' },
      { name: 'Mutum Biyu', stateName: 'Taraba' },
      { name: 'Riti', stateName: 'Taraba' },
      { name: 'Wukari', stateName: 'Taraba' },
      { name: 'Damaturu', stateName: 'Yobe' },
      { name: 'Dankalwa', stateName: 'Yobe' },
      { name: 'Dapchi', stateName: 'Yobe' },
      { name: 'Daura', stateName: 'Yobe' },
      { name: 'Fika', stateName: 'Yobe' },
      { name: 'Gashua', stateName: 'Yobe' },
      { name: 'Geidam', stateName: 'Yobe' },
      { name: 'Goniri', stateName: 'Yobe' },
      { name: 'Gorgoram', stateName: 'Yobe' },
      { name: 'Gujba', stateName: 'Yobe' },
      { name: 'Gwio Kura', stateName: 'Yobe' },
      { name: 'Kumagunnam', stateName: 'Yobe' },
      { name: 'Lajere', stateName: 'Yobe' },
      { name: 'Machina', stateName: 'Yobe' },
      { name: 'Nguru', stateName: 'Yobe' },
      { name: 'Potiskum', stateName: 'Yobe' },
      { name: 'Anka', stateName: 'Zamfara' },
      { name: 'Dan Sadau', stateName: 'Zamfara' },
      { name: 'Gummi', stateName: 'Zamfara' },
      { name: 'Gusau', stateName: 'Zamfara' },
      { name: 'Kaura Namoda', stateName: 'Zamfara' },
      { name: 'Kwatarkwashi', stateName: 'Zamfara' },
      { name: 'Maru', stateName: 'Zamfara' },
      { name: 'Moriki', stateName: 'Zamfara' },
      { name: 'Sauri', stateName: 'Zamfara' },
      { name: 'Tsafe', stateName: 'Zamfara' },
    ]

    for (const city of cities) {
      const state = await State.findByOrFail('name', city.stateName)

      await City.updateOrCreate(
        { name: city.name },
        {
          name: city.name,
          stateId: state.id,
          isActive: true,
        }
      )
    }
  }
}
