// No analytics SDK, cookies, or browser storage. Use only verified Apple links.
const launchCampaigns = {
  "xiaohongshu": "https://apps.apple.com/app/apple-store/id6791446784?pt=128612758&ct=xhs_launch101&mt=8",
  "douyin": "https://apps.apple.com/app/apple-store/id6791446784?pt=128612758&ct=douyin_launch101&mt=8",
  "bilibili": "https://apps.apple.com/app/apple-store/id6791446784?pt=128612758&ct=bili_launch101&mt=8",
  "creator": "https://apps.apple.com/app/apple-store/id6791446784?pt=128612758&ct=creator_launch101&mt=8",
  "direct": "https://apps.apple.com/app/apple-store/id6791446784?pt=128612758&ct=web_launch101&mt=8"
};
const launchChannel = new URLSearchParams(location.search).get('channel') || 'direct';
const launchLink = Object.prototype.hasOwnProperty.call(launchCampaigns, launchChannel) && launchCampaigns[launchChannel];
if (launchLink) {
  const destination = new URL(launchLink);
  if (destination.protocol === 'https:' && destination.hostname === 'apps.apple.com' && destination.pathname.endsWith('/id6791446784')) {
    document.querySelectorAll('[data-app-link]').forEach(link => { link.href = destination.href; });
  }
}
