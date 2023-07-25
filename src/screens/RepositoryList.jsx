import React from 'react'
import { Text } from 'react-native'
import repositories from '../data/repositories'
import { FlatList } from 'react-native'
import RepositoryItem from '../components/RepositoryItem'

const RepositoryList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}
        />
    )
};

export default RepositoryList;