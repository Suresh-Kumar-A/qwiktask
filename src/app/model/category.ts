export enum Category {
    TODO = "Todo",
    IN_PROGRESS = "In Progress",
    DONE = "Done"
}

// export namespace Category {

//     export function fromString(type: string): Category {
//         console.log("Con: ",type);
//         console.log("--> ",Category.DONE);
//         console.log("<> ",Category.DONE.toString());
        
        
//         console.log("1: ",type == Category.TODO.toString());
//         console.log("2: ",type == Category.IN_PROGRESS.toString());
//         console.log("3: ",type == Category.IN_PROGRESS.toString());
        
//         switch (type) {
//             case Category.TODO.toString(): return Category.TODO;
//             case Category.IN_PROGRESS.toString(): return Category.IN_PROGRESS;
//             case Category.DONE.toString(): return Category.DONE;
//         }
//         return Category.TODO;
//     }
// }