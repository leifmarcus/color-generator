import { Button, Col, Form, Input, Row } from 'antd';
import { FormProps } from 'antd/lib/form';
import React, { FunctionComponent, ReactNode } from 'react';

export type Color = string;

interface ColorInputProps {
    colors: Array<Color>;
    onChange?: (colors: Array<Color>) => void;
}

const ColorInput: FunctionComponent<ColorInputProps> = ({ colors, onChange }) => {
    const [form] = Form.useForm();

    const getFields = (colors?: Array<Color>): Array<ReactNode> => {
        if (!Array.isArray(colors)) return [];
        return colors.map((color, i) => (
            <Col span={8} key={i}>
                <Form.Item name={`color-${i}`} label={`Color ${i + 1}`}>
                    <Input placeholder="placeholder" defaultValue={color} value={color} />
                </Form.Item>
            </Col>
        ));
    };

    const handleAddClick = (): void => {
        onChange && onChange([...colors, '']);
    };

    const onFinish: FormProps['onFinish'] = (values) => {
        const colors = [];
        for (const colorName in values) {
            if (values[colorName]) {
                colors.push(values[colorName]);
            }
        }
        onChange && onChange(colors);
    };

    return (
        <Form form={form} name="advanced_search" className="ant-advanced-search-form" onFinish={onFinish}>
            <Row gutter={24}>{getFields(colors)}</Row>
            <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                    <Button type="default" onClick={handleAddClick} style={{ margin: '0 8px' }}>
                        Add
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Start Generating
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default ColorInput;
