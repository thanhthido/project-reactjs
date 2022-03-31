import React from 'react'
import PropTypes from 'prop-types'
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {}

function AlbumFeature(props) {
	const albumList = [
		{
			id: 1,
			name: 'Đỉnh Cao Caption',
			thumbnailUrl:
				'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/2/f/f/4/2ff49770f4179f8d7f8ecc28cb3fd596.jpg',
		},
		{
			id: 2,
			name: 'Thay Lời Muốn Nói: Bình Yên',
			thumbnailUrl:
				'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/b/7/d/8b7d18e6ad9dbf0bdab062366d864ec8.jpg',
		},
		{
			id: 3,
			name: 'Thay Lời Muốn Nói: Thói Quen',
			thumbnailUrl:
				'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/3/8/c/438cdc1b45b55701310eaf92eb277c56.jpg',
		},
	]
	return (
		<div>
			<h2>Có thể bạn sẽ thích đấy</h2>
			<AlbumList albumList={albumList} />
		</div>
	)
}

export default AlbumFeature
