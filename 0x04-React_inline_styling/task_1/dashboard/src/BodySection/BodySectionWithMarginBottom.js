import { StyleSheet, css } from 'aphrodite';
import BodySection from "./BodySection";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
    }
});

function BodySectionWithMarginBottom({ title, children }) {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    );
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default BodySectionWithMarginBottom;