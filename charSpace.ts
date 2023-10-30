export function leftSpace(element: string | undefined | null, char: Array<string> | string): string {
   let str: string = "";
   if (element !== (null || undefined)) {
     str = rightSpace(removeLastSpace(element));
   }
 
   if (Array.isArray(char)){
       char.forEach((charEl: any, index: number) => {
         switch (true) {
            case index < char.length:
               str += ` ${removeFirstSpace(removeLastSpace(charEl))}`;
               break;
         
            default:
               str += removeFirstSpace(removeLastSpace(charEl));
               break;
         }
       });
       return str;
   } else {
      return (str += removeFirstSpace(removeLastSpace(char)));
   }
}

export function removeLastSpace (str: string | undefined | null): string {
   let trimStr: string = `${str}`;
   const regex = new RegExp("\\s", "g");

   while (regex.test(trimStr.slice(-1, undefined))) {
      trimStr.slice(-1);
   }
   return trimStr;
}

export function removeFirstSpace (str: string | undefined | null): string {
   let trimStr: string = `${str}`;
   const regex = new RegExp("\\s", "g");

   while (regex.test(trimStr.slice(0, 1))) {
      trimStr.slice(1, undefined);
   }
   return trimStr;
}

export function rightSpace (str: string): string {
   let addStr: string = `${str}`;
   const regex = new RegExp("\\s", "g");

   if (!regex.test(addStr.slice(-1, undefined))) {
      addStr += " ";
   }
   return addStr;
}