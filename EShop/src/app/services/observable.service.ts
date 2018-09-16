import { Observable } from "rxjs";

export class ObservableService{
    getRecords(){
        return new Observable((observer) => {
            setTimeout(function(){
                observer.next(100)
            }, 1000)

            setTimeout(function(){
                observer.next(300)
            }, 2000)

            setTimeout(function(){
                observer.next(700)
            }, 4000)

            setTimeout(function(){
                observer.complete()
            }, 10000)
        })
    }
}