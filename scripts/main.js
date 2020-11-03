import {useAttractions} from "./attractions/AttractionProvider.js"
import {getAttractions} from "./attractions/AttractionProvider.js"
import {Attraction} from "./attractions/AttractionHTML.js"
import {AttractionList} from "./attractions/AttractionList.js"
import {AttractionSelect} from "./attractions/AttractionSelect.js"
// import {AttractionDetails} from "./attractions/AttractionDetail.js"

import { ParkSelect } from "./parks/ParkSelect.js";
import { ParkList } from "./parks/ParkList.js";
import { Park } from "./parks/Park.js";
import "./parks/ParkDetails.js";

import "./weather/WeatherList.js"

import { getEateries, useEateries } from "./eateries/EateryProvider.js";
import { EateriesSelect } from "./eateries/EateriesSelector.js";
import { Eateries } from "./eateries/Eateries.js";
import { EateriesList } from "./eateries/EateriesList.js";


// AttractionList()
AttractionSelect()
// AttractionDetails()

getEateries()
useEateries()
EateriesSelect()

ParkSelect()
// ParkList()
