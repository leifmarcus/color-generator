import { Col, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import { getTextColor } from '../../utils/color';
import './ColorOutput.css';

interface ColorOutputProps {
    colors: Array<string>;
}

const ColorOutput: FunctionComponent<ColorOutputProps> = ({ colors }) => {
    return (
        <Row gutter={16}>
            {colors.map((color) => {
                const colorStyle = {
                    backgroundColor: `#${color}`,
                    color: getTextColor(color),
                };
                return (
                    <Col key={color} className="ColorOutput__color-box" span={6}>
                        <div className="ColorOutput__color-name" style={colorStyle}>
                            #{color}
                        </div>
                    </Col>
                );
            })}
        </Row>
    );
};

export default ColorOutput;
