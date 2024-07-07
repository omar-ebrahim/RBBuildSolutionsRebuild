import { type SchemaTypeDefinition } from 'sanity'
import { BuildType } from "@rbbuildsolutions/data/schemas/buildType"
import { Project } from "@rbbuildsolutions/data/schemas/project"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [BuildType, Project],
}
