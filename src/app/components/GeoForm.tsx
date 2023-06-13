import { Square } from "./Square"
import { Circle } from "./Circle"

export const  GeoForm = () => {
    return (
       <div>
         <h1>Formas geometricas</h1>

         <div className="flex gap-4 border-2 p-3">
         <Square/>
         <Circle/>
         </div>
       </div>

       
    )
}