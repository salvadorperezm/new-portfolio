import type { NextConfig } from 'next';
import createMdx from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMdx();

export default withMDX(nextConfig);
