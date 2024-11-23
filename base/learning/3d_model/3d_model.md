# 3Dモデルとウェブ展開
本教材は、スマートフォンアプリを用いて、3Dモデルを作成する手法を実習形式で解説します。以下は、Windowsで実施することが望ましいです。

**Menu**
-----
- MeshLabを用いたモデル処理と書き出し
- 3DHOPでのWeb表示

-----

[実習用データ](https://github.com/yamauchi-inochu/homepage/raw/refs/heads/main/learning/data/3d_data.zip)

## MeshLabを用いたモデル処理と書き出し
MeshLabは、オープンソースの3Dメッシュ処理ソフトである。[MeshLabのwebページ](https://www.meshlab.net/#download)からOSにあわせてソフトをインストールする。インストール後、ソフトを起動する。
![img](./img/3d-1.png)

### objファイルを読み込む
以下のように、.objファイルをドラッグアンドドロップでMeshlabに読み込む。
![img](./img/3d-2.png)

### 向きを調整する
`Normals, Curvatures and Orientation > Transform: Rotate`を実行する。以下のように設定し、`Preview`を確認した後、`Apply`をクリックする。
![img](./img/3d-3.png)

### 不要な面やノイズの除去
モデルを上から見下ろすようにし、以下のアイコンをクリックする。不要な面を手作業で選択して削除する。
![img](./img/3d-4.png)

### モデルを書き出す
今回は、3DHOPで読み込むため、`Export Mesh As... `を選択し、`.nxz`の形式で書き出す。
![img](./img/3d-5.png)

以下のようなウィンドウが表示されるが、今回は、デフォルトでOKをクリックする。指定したフォルダに.nxzファイルがあることを確認しておく。※ Macではうまく書き出せない場合がある。
![img](./img/3d-6.png)

## 3DHOPでのWeb表示
3DHOPは、3Dモデルが表示できるオープンソースのフレームワークである。ここでは、3DHOPを用いて、上記で書き出したnxzファイルを読み込む。

### 3DHOPの入手
[3DHOPのダウンロードページ](https://3dhop.net/download.php)移動し、を入手する。`DOWNLOAD 3DHOP*stable [v4.3]`をダウンロードする。ダウンロードした.zipファイルを解凍し、`examples > HOWTO_1.2_interface_dimensioning.html`を表示し、仕様を確認する。この際、ローカルサーバーで表示ですれば、モデルも確認できる。
![img](./img/3d-7.png)

### 3DHOPでの.nxsの表示
`HOWTO_1.2_interface_dimensioning.html`を複製する。名称を`sample.html`に変更し、テキストエディタで開く。ローカルサーバーをたてられる場合、modelsの中に、上記で書き出したnxsファイルを移動する。以下のように、htmlファイルの一部（presenter.setSceneの部分）を２箇所、変更する。

```JavaScript
<script type="text/javascript">
var presenter = null;

function setup3dhop() {
	presenter = new Presenter("draw-canvas");

	presenter.setScene({
		meshes: {
			"3d" : { url: "models/suigaihi.nxz" }
		},
		modelInstances : {
			"Model1" : { mesh : "3d" }
		}
	});
}

```

上書きして、表示すれば次のように表示される。
![img](./img/3d-8.png)
