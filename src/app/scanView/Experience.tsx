import {useFrame, useThree} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";
import {Box3, Vector3} from "three";
import {mergeGeometries} from "three/examples/jsm/utils/BufferGeometryUtils.js";
import * as THREE from "three";

function Experience() {
  const {camera} = useThree();
  const {scene} = useGLTF("/permanent_dentition/scene.gltf");
  const geometries: THREE.BufferGeometry[] = [];

  scene.traverse(obj => {
    if (obj instanceof THREE.Mesh) {
      const mesh = obj as THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
      const geometry = mesh.geometry.clone(); // 원본 보호

      // 위치, 회전, 스케일 정보를 geometry에 적용
      geometry.applyMatrix4(mesh.matrixWorld);

      geometries.push(geometry);
    }
  });

  const mergedGeometry = mergeGeometries(geometries, true);
  const material = new THREE.MeshStandardMaterial({color: 0xdddddd});
  const mergedMesh = new THREE.Mesh(mergedGeometry, material);

  scene.clear();
  scene.add(mergedMesh);

  const box = new Box3().setFromObject(scene);
  const center = new Vector3();
  box.getCenter(center);

  useFrame(() => {
    camera.lookAt(center);
  });

  return (
    <>
      <primitive object={scene} scale={1} />
    </>
  );
}

export default Experience;
