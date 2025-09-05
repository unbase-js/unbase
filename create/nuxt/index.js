#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { consola } = require('consola')

async function createNuxtApp(projectName) {
  if (!projectName) {
    consola.error('Please provide a project name')
    process.exit(1)
  }

  const targetDir = path.resolve(process.cwd(), projectName)
  const templateDir = path.resolve(__dirname, 'template')

  try {
    // Copy template
    await fs.copy(templateDir, targetDir)
    
    // Update package.json with project name
    const packageJsonPath = path.join(targetDir, 'package.json')
    const packageJson = await fs.readJson(packageJsonPath)
    packageJson.name = projectName
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 })

    consola.success(`✅ Created ${projectName} successfully!`)
    consola.info(`📁 cd ${projectName}`)
    consola.info(`📦 pnpm install`)
    consola.info(`🚀 pnpm dev`)
  } catch (error) {
    consola.error('Failed to create project:', error)
    process.exit(1)
  }
}

const projectName = process.argv[2]
createNuxtApp(projectName)
