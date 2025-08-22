import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { BurgerarrowIcon } from '@/icons/burgerarrow-icon'

const Catgories = () => {
    const data = [
        {
            id: 1,
            parent: 'Ручной инструмент и оснастка',
            children: [
                {
                    title: 'Ручной инструмент',
                    children: [
                        { title: 'Молоток' },
                        { title: 'Отвертка' },
                        { title: 'Ключ' },
                        { title: 'Уровень' },
                        { title: 'Рулетка' },
                        { title: 'Дрель' },
                        { title: 'Перфоратор' },
                    ],
                },
                {
                    title: 'Оснастка',
                    children: [
                        { title: 'Молоток' },
                        { title: 'Отвертка' },
                        { title: 'Ключ' },
                        { title: 'Уровень' },
                        { title: 'Рулетка' },
                        { title: 'Дрель' },
                        { title: 'Перфоратор' },
                    ],
                },
            ],
        },
        {
            id: 2,
            parent: 'Ручной инструмент',
            children: [
                {
                    title: 'Оснастка',
                    children: [
                        { title: 'Молоток' },
                        { title: 'Отвертка' },
                        { title: 'Ключ' },
                        { title: 'Уровень' },
                        { title: 'Рулетка' },
                        { title: 'Дрель' },
                        { title: 'Перфоратор' },
                    ],
                },
            ],
        },
    ]

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <Box className={styles.catgories_wrapper}>

            <Box  className={styles.inner} onMouseLeave={() => setHoverIndex(null)}>
                <Box className={styles.title}>
                    {data.map((item, index) => (
                        <Box
                            key={item.id}
                            className={styles.parentItem}
                            onMouseEnter={() => setHoverIndex(index)}
                        >
                            {item.parent} <BurgerarrowIcon/> 
                        </Box>
                    ))}
                </Box>

                {hoverIndex !== null && (
                    <Box className={styles.content}>
                        {data[hoverIndex].children.map((group, index) => (
                            <Box key={index} className={styles.group}>
                                <Text className={styles.groupTitle}>{group.title}</Text>
                                <Box className={styles.childrenList}>
                                    {group.children.map((child, idx) => (
                                        <Text key={idx} className={styles.childItem}>
                                            {child.title}   
                                        </Text>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    )


}

export default Catgories
