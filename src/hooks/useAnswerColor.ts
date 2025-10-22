export default function useAnswerColor(answer: number){

    if(answer<0) return "red";
    else return "black";
}