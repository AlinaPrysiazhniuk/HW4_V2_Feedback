import PropTypes from "prop-types";
import css from "./Section.module.css"

 const Section = ({title, children}) => {
    return (
        <section className={css.section}>
            <div className={css.section_feedback}>
            {title && <h2 className={css.titile_section}>{title}</h2>}
            {children}
            </div>
        </section>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };