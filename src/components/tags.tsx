import * as React from "react"
import styled from "styled-components"
import Tag from "./tag"

interface ITagsProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[]
}

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;

  .tag {
    margin-bottom: 8px;
    margin-right: 8px;
  }
`

export default ({ tags, style }: ITagsProps) => (
  <Tags style={style}>
    {tags.map(tag => (
      <Tag key={tag} className="tag">
        {tag}
      </Tag>
    ))}
  </Tags>
)
