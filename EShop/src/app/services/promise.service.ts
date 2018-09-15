export class PromiseService{
    add(a, b){
        let c = 0;
        setTimeout(function(){
            c = a + b;
        }, 1000);

        return c;
    }
}