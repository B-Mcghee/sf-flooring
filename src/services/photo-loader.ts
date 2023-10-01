
import livingroomfloor from "../assets/living_room_floor.jpg"
import luxuryvinylplank11 from "../assets/luxury-vinyl-plank-11.jpg"
import ceramictile from "../assets/ceramic-tile.jpg"  
import luxuryvinylplank12 from "../assets/luxury-vinyl-plank-12.jpg"
import customdesignaccentwall2     from "../assets/custom-design-accent-wall-2.jpg"
import luxuryvinylplank2 from "../assets/luxury-vinyl-plank-2.jpg"
import customdesignaccentwall3     from "../assets/custom-design-accent-wall-3.jpg"
import luxuryvinylplank3 from "../assets/luxury-vinyl-plank-3.jpg"
import customdesignaccentwall      from "../assets/custom-design-accent-wall.jpg"
import luxuryvinylplank4 from "../assets/luxury-vinyl-plank-4.jpg"
import customfireplace             from "../assets/custom-fireplace.jpeg"  
import luxuryvinylplank5 from "../assets/luxury-vinyl-plank-5.jpg"
import engineeredhardwood          from "../assets/engineered-hardwood.jpg"   
import luxuryvinylplank6 from "../assets/luxury-vinyl-plank-6.jpg"
import highendlaminate2            from "../assets/high-end-laminate-2.jpg" 
import luxuryvinylplank7 from "../assets/luxury-vinyl-plank-7.jpg"
import highendlaminate3            from "../assets/high-end-laminate-3.jpg" 
import luxuryvinylplank8 from "../assets/luxury-vinyl-plank-8.jpg"
import highendlaminate4            from "../assets/high-end-laminate-4.jpg" 
import luxuryvinylplank9 from "../assets/luxury-vinyl-plank-9.jpg"
import highendlaminate5            from "../assets/high-end-laminate-5.jpg" 
import luxuryvinylplank from "../assets/luxury-vinyl-plank.jpg"
import highendlaminate             from "../assets/high-end-laminate.jpg"  
import luxuryvinyltile2 from "../assets/luxury-vinyl-tile-2.jpg"
import kitchenfloor                from "../assets/kitchen_floor.jpg"  
import luxuryvinyltile from "../assets/luxury-vinyl-tile.jpg"
import laminateflooring1           from "../assets/laminate-flooring-1.jpg"  
import laminateflooring2           from "../assets/laminate-flooring-2.jpg"  

import laminateflooring3           from "../assets/laminate-flooring-3.jpg"  

import laminateflooring4           from "../assets/laminate-flooring-4.jpg"  

import laminateflooring5           from "../assets/laminate-flooring-5.jpg"  

import laminateflooring6           from "../assets/laminate-flooring-6.jpg"  


const photos : {[key:string]:string[]} = {
    "luxury-vinyl-plank":[luxuryvinylplank3, luxuryvinylplank2, luxuryvinylplank,luxuryvinylplank4,luxuryvinylplank5,luxuryvinylplank6,luxuryvinylplank7,luxuryvinylplank8,luxuryvinylplank9,luxuryvinylplank11,luxuryvinylplank12],
    "luxury-vinyl-tile":[kitchenfloor,luxuryvinyltile, luxuryvinyltile2 ],
    "ceramic-tile":[ceramictile],
    "laminate": [highendlaminate2,highendlaminate3,highendlaminate4,laminateflooring1,laminateflooring2,laminateflooring3,laminateflooring4,laminateflooring5,laminateflooring6,livingroomfloor,highendlaminate5,highendlaminate],
    "engineered-hardwood":[engineeredhardwood],
    "custom-designs":[customfireplace,customdesignaccentwall2, customdesignaccentwall, customdesignaccentwall3]
}

class PhotoLoader {

    get = (slug: string | string) => {
               return (photos[slug])
            }
}

export default PhotoLoader;