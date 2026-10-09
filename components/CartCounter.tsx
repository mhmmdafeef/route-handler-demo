export default function CartCounter({
    quantity,
    setQuantity,
}: {
    quantity: number ;
    setQuantity: (value: number | ((current: number) => number)) => void;
}){
    return(
<div className="inline-flex min-h-11 items-center rounded-full border border-[#ead4d2] px-1 text-sm">
    <button aria-label="Decrease quantity" className="grid size-9 place-items-center" onClick={() =>
        setQuantity((current) => Math.max(0, current - 1))}>−</button>
    <span aria-live="polite" className="min-w-7 text-center">{quantity}</span>
    <button aria-label="Increase quantity" className="grid size-9 place-items-center" onClick={() =>
        setQuantity((current) => current + 1)}>+</button>
</div>
    )
}