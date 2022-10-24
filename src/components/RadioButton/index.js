import PropTypes from "prop-types";
import React from "react";
import "../../styles/components/radio.scss";

const Radio = ({ selected, onChange, enabled, text, value }) => (
    (
        <div
            className="modern-radio-container"
            onClick={() => {
                if (enabled)
                    onChange(value);
            }}
        >
            <div
                className={`radio-outer-circle ${value !== selected && "unselected"} ${!enabled && "disabled"}`}
            >
                <div
                    className={`radio-inner-circle ${value !== selected &&
                        "unselected-circle"}`}
                />
            </div>
            <div className={`helper-text ${!enabled && "disabled"}`}>{text}</div>
        </div>
    )
)

Radio.propTypes = {
    text: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default Radio;