console.log("We are Organ-pipe-cactus!!!")

import {useAttractions} from "./attractions/AttractionProvider.js"
import {getAttractions} from "./attractions/AttractionProvider.js"
import {Attraction} from "./attractions/AttractionHTML.js"
import {AttractionList} from "./attractions/AttractionList.js"
import {AttractionSelect} from "./attractions/AttractionSelect.js"
// import  "./attractions/AttractionDetail.js"
import {AttractionDetails} from "./attractions/AttractionDetail.js"




// AttractionList()
AttractionSelect()
AttractionDetails()
import { ParkSelect } from "./parks/ParkSelect.js";
import { ParkList } from "./parks/ParkList.js";
import { Park } from "./parks/Park.js";
import "./parks/ParkDetails.js";
import "./weather/WeatherList.js"
import { getEateries, useEateries } from "./eateries/EateryProvider.js";
import { EateriesSelect } from "./eateries/EateriesSelector.js";
import { Eateries } from "./eateries/Eateries.js";
import { EateriesList } from "./eateries/EateriesList.js";


getEateries()
useEateries()
EateriesSelect()
ParkSelect()
// ParkList()
