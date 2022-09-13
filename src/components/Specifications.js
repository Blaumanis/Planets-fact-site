
function Specifications({specs}) {
  return (
    <section className="spec-section lg:w-full lg:px-2">
        {specs.map((spec, idx) => (
            <div key={idx} className="spec">
                <h3 className="md:!text-sm">{spec.name}</h3>
                <h4 className="lg:text-2xl md:!text-xl">{spec.info}</h4>
            </div>
        ))}
    </section>
  )
}

export default Specifications;
