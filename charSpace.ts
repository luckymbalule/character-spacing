export default function leftSpace(element: any, char: any): string {
   let str: string = "";
   if (str !== (null || undefined)) {
     str = `${removeLastSpace(element)}`;
   }
 
   if (Array.isArray(char)){
       char.forEach((charEl: any) => {
         str += ` ${removeFirstSpace(removeLastSpace(charEl))}`;
       });
       return str;
   } else {
      return (str += ` ${removeFirstSpace(removeLastSpace(char))}`);
   }
}

export function removeLastSpace (str: any): string {
   let trimStr: any = `${str}`;
   const regex = new RegExp("\\s", "g");

   while (regex.test(trimStr.slice(-1, undefined))) {
      trimStr.slice(-1);
   }

   return trimStr;
}

export function removeFirstSpace (str: any): string {
   let trimStr: any = `${str}`;
   const regex = new RegExp("\\s", "g");

   while (regex.test(trimStr.slice(0, 1))) {
      trimStr.slice(1, undefined);
   }
   
   return trimStr;
}