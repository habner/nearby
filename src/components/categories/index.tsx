import { FlatList } from 'react-native'
import { Category } from '../category'
import { s } from './styles'

export type CategoryType = { id: string; name: string }

type CategoriesProps = {
  data: CategoryType[]
  selected: string
  onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: CategoriesProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.content}
      style={s.container}
    />
  )
}
